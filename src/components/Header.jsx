import React from 'react'
import viteLogo from '/vite.svg'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Ghost } from 'lucide-react'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/clerk-react'

import { dark } from '@clerk/themes'
function Header () {
  return (
    <header className='px-2 lg:px-20 h-auto sticky top-0 inset-x-0 min-w-screen bg-foreground/40 backdrop-blur-lg border-b border-border z-50'>
      <nav className=' flex flex-row  p-4 justify-between'>
        <div className='flex flex-row gap-3 self-center'>
          <img src={viteLogo} />
          <h1 className='font-semibold text-white self-center text-lg'>
            <Link className=' font-semibold text-xl ' to='/'>
              LearnOrbit
            </Link>
          </h1>
        </div>
        <div className='flex flex-row self-center'>
          <span className='ml-2 self-center p-1'>
            <Link
              to='/roadmaps'
              className='hover:underline font-semibold text-xl mx-2'
            >
              Roadmaps
            </Link>
          </span>
          <span className=' self-center p-1'>
            <SignedOut
              appearance={{
                baseTheme: dark
              }}
            >
              <SignInButton
                className='bg-white hover:bg-slate-300 hover:transform hover:transition-all transform
            transition-all text-gray-800 px-4 py-2 rounded-lg font-semibold'
              ></SignInButton>
            </SignedOut>
            <SignedIn
              appearance={{
                baseTheme: dark
              }}
            >
              <UserButton
                appearance={{
                  baseTheme: dark
                }}
              />
            </SignedIn>
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Header
