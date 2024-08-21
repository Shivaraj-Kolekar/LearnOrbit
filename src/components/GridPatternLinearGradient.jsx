import { cn } from '@/lib/utils'
import GridPattern from '@/components/magicui/grid-pattern'
import AnimatedShinyText from './magicui/animated-shiny-text'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { BorderBeam } from './magicui/border-beam'
const GridPatternLinearGradient = () => {
  return (
    <div className='relative backdrop-blur-lg flex min-h-1/3 mb-4 align-middle  justify-center overflow-hidden rounded-lg   lg:px-20 px-4 '>
      <div className='lg:mx-32 '>
        <div className=' xl:mx-32 mx-2 mt-12 flex  w-auto  items-center flex-col align-middle justify-center'>
          <div
            className={cn(
              ' rounded-full border  border-black/5 mt-16 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
            )}
          >
            <div>
              <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 '>
                <span>✨ Introducing Roadmap Guides</span>

                <ArrowRightIcon className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
              </AnimatedShinyText>{' '}
            </div>
          </div>
          <p className='mt-8 text-white whitespace-pre-wrap  text-center md:text-6xl text-3xl font-semibold tracking-tighter  dark:text-white'>
            Unlock Your Tech Potential with LearnOrbit
          </p>

          <p className=' my-4 whitespace-pre-wrap  text-center md:text-2xl text-lg font-semibold tracking-tighter text-gray-300 dark:text-white'>
            Navigate your journey from beginner to pro with personalized
            learning paths. Build real-world projects and access top-quality
            resources, all in one place.
          </p>
          <div className='hidden md:flex relative items-center justify-center mt-8 md:mt-12 w-full'>
            <Link
              href='#'
              className='flex items-center justify-center w-max rounded-full border-t border-foreground/30 bg-white/20 backdrop-blur-lg px-2 py-1 md:py-2 gap-2 md:gap-8 shadow-3xl shadow-background/40 cursor-pointer select-none'
            >
              <p className='text-foreground text-sm text-white text-center md:text-base font-medium pl-4 pr-4 lg:pr-0'>
                <Link to='/roadmaps'>
                  ✨ {'  '} Start building your dream website now!
                </Link>
              </p>
              <Button
                size='sm'
                className='rounded-full hidden bg-blue-500 hover:bg-blue-300  lg:flex border border-foreground/20'
              >
                <Link to='/roadmaps'>Get Started</Link>
                <ArrowRight className='w-4 h-4 ml-1' />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <GridPattern
        width={70}
        height={70}
        x={-1}
        y={-1}
        className={cn(
          '[mask-image:linear-gradient(to_bottom,white,transparent)] '
        )}
      />
    </div>
  )
}

export default GridPatternLinearGradient
