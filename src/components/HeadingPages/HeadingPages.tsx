import React from 'react'

export const HeadingPages = ({ title }: { title: string }) => {
  return (
    <div className="bg-black">
      <div className="lg:w-[1024px] xl:w-[1280px] m-auto p-6 lg:p-0 md:h-[200px]  md:flex items-center">
        <h2 className="font-bebas text-4xl lg:text-6xl text-white">{title}</h2>
      </div>
    </div>
  )
}
