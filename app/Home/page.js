import GameCard from '@/components/GameCard'
import React from 'react'
import chatImage from '../../public/chat.png'

const page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24 bg-slate-200'>
      <h1>Games</h1>
      <div className='flex flex-row gap-7'>
      <GameCard title={'Fun Dialogs'} image={chatImage} type={'FunDialogs'}/>
      <GameCard title={'Another Game'} image={chatImage} type={'None'}/>
      </div>
    </div>
  )
}

export default page