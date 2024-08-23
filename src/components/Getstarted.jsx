import React from 'react'

const Getstarted = () => {
  return (
    <section className='bg-transparent py-12'>
      <div className='container mx-auto px-4'>
        <h2 className=' mt-8  whitespace-pre-wrap   text-center md:text-4xl text-2xl font-bold tracking-tighter text-white mb-12'>
          Start Your Journey in 3 Simple Steps
        </h2>
        <div className='flex lg:flex-row flex-col gap-4 justify-center'>
          <div className='bg-slate-900 hover:scale-105 hover:transition-all hover:transform transition-all transform border-slate-700 self-center lg:self-auto rounded-xl shadow-md p-6 w-[380px] border-2'>
            <div className='text-lg font-bold mb-2'>01. Choose Your Skill</div>
            <p className='text-gray-300'>
              Begin by selecting a skill you wish to master. Explore detailed
              roadmaps, informative references, and practical projects
              associated with your chosen skill.
            </p>
          </div>
          <div className='bg-slate-900 hover:scale-105 hover:transition-all hover:transform transition-all transform border-slate-700 lg:self-auto self-center rounded-xl shadow-md p-6 w-[380px] border-2'>
            <div className='text-lg font-bold mb-2'>02. Register</div>
            <p className='text-gray-300'>
              Complete the registration process to gain access to personalized
              learning features. This will enable you to monitor your progress
              and stay engaged with your learning journey.
            </p>
          </div>
          <div className='bg-slate-900 hover:scale-105 hover:transition-all hover:transform transition-all transform border-slate-700 self-center lg:self-auto rounded-xl shadow-md p-6 w-[380px] border-2'>
            <div className='text-lg font-bold mb-2'>03. Begin Learning</div>
            <p className='text-gray-300'>
              Start your educational journey by utilizing the provided
              resources, tracking your progress through the roadmap, and working
              on projects to apply your new skills effectively. Happy coding!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Getstarted
