import React from 'react'
import { BorderBeam } from './magicui/border-beam'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SpotlightCard from './SpotlightCard'
function Features () {
  return (
    <section className='xl:px-32 px-2 min-h-max mb-12  mt-4 flex justify-center flex-row'>
      <div className=''>
        <p className='mt-8  whitespace-pre-wrap   text-center md:text-4xl text-2xl font-bold tracking-tighter text-white'>
          Why choose us ?
        </p>
        <p className='mt-2  whitespace-pre-wrap   text-center md:text-2xl text-lg font-semibold tracking-tighter text-gray-300'>
          Unleash Your Full Potential with Our All-Inclusive Learning Approach
        </p>

        <div className='flex flex-col lg:flex-row gap-4 mt-12'>
          <SpotlightCard
            className='custom-spotlight-card bg-slate-900 self-center h-auto w-80 md:h-80 md:w-96 '
            spotlightColor='rgba(0, 229, 255, 0.2)'
          >
            <FontAwesomeIcon
              icon='fa fa-regular fa-map'
              size='2xl'
              style={{ color: '#ffffff' }}
            />
            <h1 className='text-white text-lg lg:text-xl mt-2 mb-2 font-semibold'>
              Roadmaps
            </h1>
            <p className='text-gray-300'>
              Our curated roadmaps guide you step-by-step through your learning
              journey, whether you're a beginner or looking to advance your
              skills. Each roadmap is designed to help you focus on the right
              technologies at the right time, ensuring a smooth and structured
              path to mastery
            </p>

            <BorderBeam size={250} duration={12} delay={9} />
          </SpotlightCard>
          <SpotlightCard
            className='custom-spotlight-card bg-slate-900 self-center h-auto w-80 md:h-80 md:w-96 '
            spotlightColor='rgba(0, 229, 255, 0.2)'
          >
            <FontAwesomeIcon
              icon='fa fa-dualtone fa-code'
              size='2xl'
              style={{ color: '#ffffff' }}
            />
            <h2 className='text-white text-lg lg:text-xl mt-2 mb-2 font-semibold'>
              Projects
            </h2>
            <p className='text-gray-300'>
              Put your knowledge into practice with real-world projects. Our
              project guides offer detailed instructions and examples, allowing
              you to build a robust portfolio that showcases your skills to
              potential employers or clients.
            </p>

            <BorderBeam size={250} duration={12} delay={9} />
          </SpotlightCard>
          <SpotlightCard
            className='custom-spotlight-card bg-slate-900 self-center h-auto w-80 md:h-80 md:w-96 '
            spotlightColor='rgba(0, 229, 255, 0.2)'
          >
            <FontAwesomeIcon
              icon='fa-regular fa-file'
              size='2xl'
              style={{ color: '#ffffff' }}
            />
            <h2 className='text-white text-lg lg:text-xl mt-2 mb-2 font-semibold'>
              Resources
            </h2>
            <p className='text-gray-300'>
              Access a comprehensive collection of high-quality resources, from
              articles and tutorials to videos and books. We’ve gathered the
              best materials available to complement your learning and help you
              deepen your understanding of complex topics.
            </p>

            <BorderBeam size={250} duration={12} delay={9} />
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}

export default Features
