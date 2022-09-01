import React from 'react'

export const HeadingPages = ({
  title,
  img,
}: {
  title: string
  img?: string
}) => {
  return (
    <div className="bg-black relative">
      <div className="lg:w-[1024px] xl:w-[1280px] m-auto p-6 lg:p-0 md:h-[200px]  md:flex items-center relative z-10">
        <h2 className="font-bebas text-4xl lg:text-6xl text-white ">{title}</h2>
      </div>
      {img && (
        <img
          src={img}
          className="absolute w-full h-full left-0 top-0 z-0 object-cover"
        />
      )}
    </div>
  )
}
