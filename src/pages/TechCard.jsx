import React from 'react'
import { Badge } from '@/components/ui/badge'
import SpotlightCard from '@/components/SpotlightCard'

function TechCard (props) {
  return (
    <SpotlightCard
      className='custom-spotlight-card bg-slate-900 self-center h-28 w-40  rounded-lg md:h-32 m-2 md:w-80 '
      spotlightColor='rgba(0, 229, 255, 0.2)'
    >
      <h1 className='text-base md:text-2xl'>{props.title}</h1>
      <Badge className='bg-slate-200 text-black'>{props.badge}</Badge>
    </SpotlightCard>
  )
}

export default TechCard
