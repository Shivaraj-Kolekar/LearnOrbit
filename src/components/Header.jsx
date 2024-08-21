import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/learnorbit.png'
import { dark } from '@clerk/themes'

import Feedback from './Feedback'

function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='px-3 lg:px-20 h-auto sticky top-0 inset-x-0 min-w-screen bg-foreground/40 backdrop-blur-lg border-b border-border z-50'>
      <nav className='flex flex-row py-4  justify-between items-center'>
        <div className='flex flex-row gap-3 items-center'>
          <img src={logo} className='w-10 h-10' alt='LearnOrbit Logo' />
          <h1 className='font-semibold text-white text-lg'>
            <Link className='font-semibold text-xl' to='/'>
              LearnOrbit
            </Link>
          </h1>
        </div>

        {/* Mobile menu button */}
        <button className='md:hidden text-white' onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className='hidden md:flex flex-row items-center space-x-4'>
          <NavItems />
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-foreground/40 backdrop-blur-lg py-4'>
          <NavItems mobile={true} />
        </div>
      )}
    </header>
  )
}

function NavItems ({ mobile = false }) {
  return (
    <>
      <div className='flex justify-between gap-3 self-center md:flex-row flex-col '>
        <Link
          to='/roadmaps'
          className={`inline-flex items-center text-gray-400 self-start md:self-center hover:text-white text-lg  font-semibold justify-center whitespace-nowrap rounded-md   ring-offset-background border-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border-input     ${
            mobile ? 'block mb-2 text-center' : ''
          }`}
        >
          Roadmaps
        </Link>
        <Feedback />
        <div className={mobile ? 'self-start' : ''}>
          <SignedOut appearance={{ baseTheme: dark }}>
            <SignInButton
              appearance={{ baseTheme: dark }}
              className='inline-flex items-center text-gray-400 hover:text-white text-lg  font-semibold   whitespace-nowrap rounded-md  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 pt-1 '
            >
              Register
            </SignInButton>
          </SignedOut>
          <SignedIn appearance={{ baseTheme: dark }}>
            <UserButton className='' appearance={{ baseTheme: dark }} />
          </SignedIn>
        </div>
      </div>
    </>
  )
}

export default Header
