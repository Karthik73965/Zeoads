import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqAcc() {
  return (
    <Accordion type="single" collapsible className=" md:mx-20">
      <AccordionItem className="" value="item-1">
        <AccordionTrigger>How do I buy Zeoads Agency account?</AccordionTrigger>
        <AccordionContent>
          You just have to signup a choose a suitable plan according to your need. Once you pay for the plan you get the account delivery immediately.     
             </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>In how much time is the account delivered once we pick a plan?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is there any Monthly rental / commission charges or Hidden charges??</AccordionTrigger>
        <AccordionContent>
          Yes. It&lsquo;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-123">
        <AccordionTrigger>How many pages and pixels can be connected to the ad account?</AccordionTrigger>
        <AccordionContent>
          Yes. It&lsquo;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-12123">
        <AccordionTrigger>How do I pay for the ads spend?</AccordionTrigger>
        <AccordionContent>
          Yes. It&lsquo;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-11">
        <AccordionTrigger>What if the accounts are disabled or restricted?</AccordionTrigger>
        <AccordionContent>
          Yes. It&lsquo;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-12">
        <AccordionTrigger>Can I run restricted category ads on these accounts?</AccordionTrigger>
        <AccordionContent>
          Yes. It&lsquo;s animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
