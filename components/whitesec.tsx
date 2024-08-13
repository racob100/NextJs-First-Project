import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

function Whitesec() {
  return (
    <div className='bg-white text-black flex flex-col justify-center items-center p-4 sm:p-6 md:p-10'>
      <div className='text-base sm:text-xl md:text-3xl lg:text-5xl font-semibold p-4 sm:p-6 md:p-12'>
        Our Services
      </div>
      
      <Accordion type="single" collapsible className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
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
          <AccordionTrigger>Influencer & KOL Marketing</AccordionTrigger>
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
