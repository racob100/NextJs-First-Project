import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

function Whitesec() {
  return (
    <div className='bg-white text-black flex flex-col justify-center items-center p-10' >
      <div className='sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-semibold p-12'>Our Services</div>
      
      <Accordion type="single" collapsible className="w-[60vw]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Strategic Consulting</AccordionTrigger>
        <AccordionContent>
          Strategic Consulting content is here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Social Media Management</AccordionTrigger>
        <AccordionContent>
          Social media management content is here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Influencer & KOL marketing</AccordionTrigger>
        <AccordionContent>
          Influencer and KOL marketing content is here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Content and Media</AccordionTrigger>
        <AccordionContent>
          Content and media content is here.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
  )
}

export default Whitesec
