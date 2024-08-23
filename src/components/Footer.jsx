import React from 'react'
import logo from '../assets/learnorbit.png'
function Footer () {
  return (
    <footer className='lg:px-32 px-2 footer mt-16 bg-slate-900 text-neutral-content items-center p-4'>
      <aside className='grid-flow-col items-center'>
        <img src={logo} className='w-10 h-10' alt='LearnOrbit Logo' />
        <p>LearnOrbit © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className='grid-flow-col lg:gap-4  md:place-self-center md:justify-self-end'>
        <ul>
          <li>
            <a
              href='https://github.com/Shivaraj-Kolekar/LearnOrbit'
              target='_blank'
              className='bg-white text-black px-4 py-2 texl-xl font-semibold rounded-md md:mb-0   hover:underline me-4 md:me-6'
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
