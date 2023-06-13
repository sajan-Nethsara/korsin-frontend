import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GameCard = ({title , image , type}) => {
  return (
    <Link href={`/Game/${type}`} className='h-40 w-40 shadow-xl bg-slate-50 rounded-lg flex items-center justify-center'>
      <p className='flex '>{title}</p>
    </Link>
  )
}

export default GameCard