import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

function Faq () {
  return (
    <section className='flex justify-center flex-col lg:mx-32 mx-6 text-white h-auto my-8 mt-0'>
      <p className='my-8  whitespace-pre-wrap   text-center md:text-4xl text-2xl font-bold tracking-tighter text-white'>
        FAQ's
      </p>
      <div className='text-white'>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>What is LearnOrbit?</AccordionTrigger>
            <AccordionContent>
              LearnOrbit is a comprehensive platform that offers customized
              roadmaps for learning various technologies and programming
              languages along with references and projects
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>How does LearnOrbit work?</AccordionTrigger>
            <AccordionContent>
              We provide the user with roadmap, resources and projects to learn
              any technologies user want in efficent and optimal manner.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              Is LearnOrbit suitable for beginners?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely! We have roadmaps for all skill levels, from complete
              beginners to advanced developers looking to expand their
              expertise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>Are the roadmaps up-to-date?</AccordionTrigger>
            <AccordionContent>
              Yes, we regularly updates the roadmaps to reflect the latest
              industry trends and best practices.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger>Can I track my progress?</AccordionTrigger>
            <AccordionContent>
              Definitely! TechPath includes a progress tracking feature that
              helps you monitor your advancement and stay motivated.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-6'>
            <AccordionTrigger>
              Can I switch between different tech roadmaps?
            </AccordionTrigger>
            <AccordionContent>
              Of course! You're free to explore and switch between different
              roadmaps as your interests and career goals evolve.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
