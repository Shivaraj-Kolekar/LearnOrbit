import React from 'react'
import { Link } from 'react-router-dom'

function Error () {
  return (
    <section className='min-h-screen w-h-screen flex flex-col justify-center align-middle '>
      <h1 className='text-sky-400 my-10 self-center text-9xl'>404 Error</h1>
      <div className='self-center text-3xl justify-center'>
        <h1 className='text-center mb-4'>Page Not Found</h1>
        <p>We couldn't find the page you're looking for.</p>
      </div>
      <Link
        to='/'
        className='self-center bg-sky-600 px-4 my-4 py-2 rounded-lg border-bg-sky-400'
      >
        Back To Homepage
      </Link>
    </section>
  )
}

export default Error
