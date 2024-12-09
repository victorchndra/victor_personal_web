import React from 'react'

export const ProfileSection = () => {
  return (
    <section className="flex justify-center">
      <div className="w-full max-w-[570px] flex gap-4">
        <div className="h-16 w-16 rounded-full bg-gray-200 flex-shrink-0" />
        <div className="space-y-2 text-sm">
          <p>
            Hello 👋 I started my journey in 2024.
          </p>
          <p>
            I write things, thoughts, build and share my projects and its journey. Follow along for something cool ahead!
          </p>
        </div>
      </div>
    </section>
  )
}
