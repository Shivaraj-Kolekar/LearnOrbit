import React from 'react'

function Progress () {
  return (
    <div className='w-full bg-gray-200 rounded-full h-4 mt-4'>
      <div
        className='bg-blue-600 h-4 rounded-full'
        style={{ width: `${progressPercentage}%` }}
      ></div>
    </div>
  )
}

export default Progress
