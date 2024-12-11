import Link from 'next/link'
import React from 'react'

export const LetsConnect = () => {
  return (
    <section className='flex justify-center'>
      <div className='w-full max-w-[570px] space-y-4'>
        <h2 className='text-xl font-medium'>Lets Connect</h2>
        <p className=' text-sm'>
          If you want to get in touch with me about something or just want to say hi, feel free to reach me out on social media. 😊
        </p>
        <div className='flex gap-4'>
          <Link href="#" className='text-zinc-500 hover:text-foreground text-sm'>
            Instagram
          </Link>
          <Link href="#" className='text-zinc-500 hover:text-foreground text-sm'>
            Github
          </Link>
          <Link href="#" className='text-zinc-500 hover:text-foreground text-sm'>
            Twitter
          </Link>
        </div>
      </div>
    </section>
  )
}
