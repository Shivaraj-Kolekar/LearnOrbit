import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShineBorder from './components/magicui/shine-border'
import Hero from './components/Hero'
import { BorderBeam } from './components/magicui/border-beam'
import ShinyButton from './components/magicui/shiny-button'
import { MagicCard } from './components/magicui/magic-card'
import GradualSpacing from './components/magicui/gradual-spacing'
import SpotlightCard from './components/SpotlightCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatedContainer } from './components/AnimatedContainer'
import Features from './components/Features'
import Faq from './components/Faq'
import { Testimonals } from './components/Testimonals'
import image from './assets/Screenshot 2024-08-16 190617.png'
function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='min-w-screen'>
      <Hero />
      <div className=' flex justify-center flex-col mt-20 '>
        <div className='self-center'>
          <div className='relative  flex items-center py-10 md:py-20 w-full'>
            <div className='absolute top-1/2 left-1/2 h-full -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 w-[1300px] -translate-x-1/2  -translate-y-1/2 inset-0 blur-[10rem]'></div>
            <div className='-m-2 rounded-xl   p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl'>
              <img
                className='rounded-md object-cover backdrop-blur-md lg:rounded-xl bg-foreground/10 shadowring-1 ring-border flex h-[200px] w-full sm:h-[500px] sm:w-[710px] lg:w-[1200px] lg:h-[700px]'
                src={image}
                alt='Image placeholder'
              />

              <BorderBeam size={250} duration={8} delay={9} />
            </div>
          </div>
        </div>
      </div>

      <section className='xl:px-32 px-2 min-h-max mb-12 min-w-screen mt-4 flex justify-center flex-row'>
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
                Our curated roadmaps guide you step-by-step through your
                learning journey, whether you're a beginner or looking to
                advance your skills. Each roadmap is designed to help you focus
                on the right technologies at the right time, ensuring a smooth
                and structured path to mastery
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
                project guides offer detailed instructions and examples,
                allowing you to build a robust portfolio that showcases your
                skills to potential employers or clients.
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
                Access a comprehensive collection of high-quality resources,
                from articles and tutorials to videos and books. We’ve gathered
                the best materials available to complement your learning and
                help you deepen your understanding of complex topics.
              </p>

              <BorderBeam size={250} duration={12} delay={9} />
            </SpotlightCard>
          </div>
        </div>
      </section>
      <section>
        <Testimonals />
      </section>
      <section className='flex justify-center flex-col lg:mx-32 mx-2 text-white h-auto my-8 mt-0'>
        <p className='my-8  whitespace-pre-wrap   text-center md:text-4xl text-2xl font-bold tracking-tighter text-white'>
          FAQ's
        </p>
        <div className=''>
          <Faq />
        </div>
      </section>

      <footer className='lg:px-32 px-2 footer mt-16 bg-slate-900 text-neutral-content items-center p-4'>
        <aside className='grid-flow-col items-center'>
          <svg
            width='36'
            height='36'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            className='fill-current'
          >
            <path d='M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z'></path>
          </svg>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='fill-current'
            >
              <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='fill-current'
            >
              <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              className='fill-current'
            >
              <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default App
