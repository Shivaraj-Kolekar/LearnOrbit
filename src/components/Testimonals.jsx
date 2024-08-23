import { cn } from '@/lib/utils'
import Marquee from '@/components/magicui/marquee'

const reviews = [
  {
    name: 'Aditya Patil',
    username: '@jack',
    body: 'The UI is impressive and the roadmap, along with the references and projects, is incredibly useful. Great job!',
    img: 'https://avatar.vercel.sh/jack'
  },
  {
    name: 'Aditya Kamble',
    username: '@jill',
    body: 'I’m really impressed with the UI. The feature for tracking roadmap progress is a standout addition!',
    img: 'https://avatar.vercel.sh/jill'
  },
  {
    name: 'Aniket',
    username: '@john',
    body: 'The modern UI is fantastic, and the references provided are incredibly helpful. Well done!s',
    img: 'https://avatar.vercel.sh/john'
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane'
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny'
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james'
  }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        'relative w-80 h-52 cursor-pointer overflow-hidden  rounded-xl border p-4 border-gray-50/[.1] bg-gray-400/[.10] hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <img className='rounded-full' width='32' height='32' alt='' src={img} />
        <div className='flex flex-col'>
          <figcaption className='text-lg font-medium dark:text-white'>
            {name}
          </figcaption>
          {/* /
          <p className='text-md font-medium dark:text-white/40'>{username}</p>*/}
        </div>
      </div>
      <blockquote className='mt-2 text-xl'>{body}</blockquote>
    </figure>
  )
}

export function Testimonals () {
  return (
    <section>
      <div className='lg:px-32 px-4 relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-none md:shadow-xl'>
        <p className='my-8  whitespace-pre-wrap   text-center md:text-4xl text-2xl font-bold tracking-tighter text-white'>
          Testimonals
        </p>
        <Marquee pauseOnHover className='[--duration:20s]'>
          {firstRow.map(review => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-950'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-950'></div>
      </div>
    </section>
  )
}
