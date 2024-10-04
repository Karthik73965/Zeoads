// app/api/(stripe)/stripe_webhook/route.ts
import { NextResponse } from "next/server"; // Use NextResponse instead of NextApiResponse
import Stripe from "stripe";
import { addBalanceTowallet } from "@/actions/Dashboard/CreditActions";
import { AnalyticsFunc } from "@/actions/admin/AnalyticsActions";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {});

// Handle the POST request for the webhook
export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    const body = await req.text(); // Get raw body as text

    //@ts-ignore
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error("Webhook Error:", err);
    return NextResponse.json(
      { message: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle different event types
  switch (event.type) {
    case "payment_intent.succeeded":
      const paymentIntent = event.data.object as Stripe.PaymentIntent;

      // Extract necessary data
      const userId = paymentIntent.metadata.userId;
      const amount = paymentIntent.amount;

      // Update wallet balance
      const walletUpdateResult = await addBalanceTowallet(
        paymentIntent.metadata.walletId,
        userId,
        amount,
        "Stripe"
      );

      if (walletUpdateResult) {
        await AnalyticsFunc(paymentIntent.id, amount, false);
      } else {
        console.error("Failed to update wallet balance.");
      }
      break;

    case "payment_intent.payment_failed":
      // Handle payment failure if needed
      console.error("Payment failed:", event.data.object);
      break;

    // Add more event types as needed

    default:
      console.warn(`Unhandled event type ${event.type}`);
  }

  // Respond with a 200 status code to acknowledge receipt of the event
  return NextResponse.json({ received: true });
}
