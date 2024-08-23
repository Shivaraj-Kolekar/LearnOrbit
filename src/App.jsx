import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Analytics } from '@vercel/analytics/react'
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

import image from './assets/Roadmap_preview.png'
import Getstarted from './components/Getstarted'
function App () {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Hero />
      <Analytics />
      <div className=' flex justify-center flex-col lg:mt-24 mt-10  '>
        <div className='self-center'>
          <div className='relative  flex items-center py-10 md:py-20  '>
            <div className='absolute top-1/2 left-1/2 h-full -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 w-[300px] lg:w-[1300px] -translate-x-1/2  -translate-y-1/2 inset-0 blur-[10rem]'></div>
            <div className='-m-2 rounded-xl   p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl'>
              <img
                className='rounded-md object-cover backdrop-blur-md lg:rounded-xl bg-foreground/10 shadowring-1 ring-border flex h-[200px] max-w-[1200px] sm:h-[500px] sm:w-[710px] lg:w-[1200px] lg:h-[700px]'
                src={image}
                alt='Image placeholder'
              />

              <BorderBeam size={250} duration={8} delay={9} />
            </div>
          </div>
        </div>
      </div>
      <Getstarted />
      <Features />
      <Testimonals />
      <Faq />
    </div>
  )
}

export default App
