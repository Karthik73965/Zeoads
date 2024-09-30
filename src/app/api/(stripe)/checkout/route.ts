"use server";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { amount, currency, userId, walletId } = await req.json(); // Accepting userId and walletId from the body
    const { searchParams } = new URL(req.url);
    const returnUrl =
      searchParams.get("return_url") || "https://localhost:3000//billing/wallet/stripe/payment";

    if (!amount || amount <= 0) {
      return NextResponse.json({ message: "Invalid amount" }, { status: 400 });
    }

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          price_data: {
            currency: currency || "inr",
            product_data: {
              name: "Wallet Recharge",
            },
            unit_amount: amount, // Accept the amount in the smallest unit
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      return_url: `${returnUrl}?session_id={CHECKOUT_SESSION_ID}`,
      metadata: {
        userId,
        walletId,
      },
    });
    console.log(session.id);

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (err: any) {
    console.error(err?.message);
    return NextResponse.json({ message: err?.message }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");
    if (!sessionId) {
      return NextResponse.json(
        { message: "Missing session_id" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({
      status: session.status,
      customer_email: session.customer_details?.email,
      //@ts-ignore
      userId: session.metadata.userId, // Retrieve user ID from session metadata
      //@ts-ignore
      walletId: session.metadata.walletId, // Retrieve wallet ID from session metadata
    });
  } catch (err: any) {
    console.error(err?.message);
    return NextResponse.json(
      { message: err?.message },
      { status: err.statusCode || 500 }
    );
  }
}
