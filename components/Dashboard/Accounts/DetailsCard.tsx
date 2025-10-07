import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DetailsCard() {
  return (
    <>
      <div className="mt-[14px]">
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem
            value="item-1"
            className="bg-white rounded-[2px] border border-[#C6CDD1] px-6"
          >
            <AccordionTrigger className="text-lg md:text-xl font-medium hover:no-underline cursor-pointer focus-visible:ring-0">
              Account Details
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-base text-secondary-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                distinctio expedita, laudantium ratione accusamus sint inventore
                sapiente nisi tempora quos!
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
