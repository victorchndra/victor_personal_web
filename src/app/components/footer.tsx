import React from 'react'

export const Footer = () => {
  return (
    <footer className='mx-auto max-w-[1140px] px-4 py-8 mt-8'>
      <div className='flex justify-center'>
        <div className='flex justify-between w-full max-w-[570px] text-xs md:text-sm text-zinc-400 font-light'>
          <p>Built with Laravel, Next.js, and Tailwind</p>
          <p>© 2024 | Victor Chandra</p>
        </div>
      </div>
    </footer>
  )
}
