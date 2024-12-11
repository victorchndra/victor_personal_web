import Image from 'next/image'
import React from 'react'
import avatar from '@/app/avatar.png'

export const ProfileSection = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[570px] flex gap-4">
        {/* <div className="h-16 w-16 rounded-full bg-gray-200 flex-shrink-0" /> */}
        <Image
          src={avatar}
          alt='avatar'
          width={64}
          height={64}
          className='border-2 h-16 w-16 border-violet-600 rounded-full flex-shrink-0'
        />
        <div className="space-y-2 text-sm">
          <p>
            Hello!👋 Started my journey in 2024.
          </p>
          <p>
            I write <span className='underline decoration-dotted'>things</span>, <span className='underline decoration-dotted'>thoughts</span>, <span className='underline decoration-dotted'>build</span> and <span className='underline decoration-dotted'>share</span> my projects and the journeys. Follow along for something cool ahead!
          </p>
        </div>
      </div>
    </section>
  )
}
