import React from 'react'

export const HeadingBanner = () => {
  return (
    <div className="relative bg-black after:content-[''] after:w-1/2 after:h-full after:left-0 after:top-0 after:absolute after:bg-red-700 after:bg-opacity-50">
      <img
        src="https://siteong.s3.sa-east-1.amazonaws.com/larm-rmah-AEaTUnvneik-unsplash.jpg"
        className="w-screen h-[calc(100vh-80px)] object-cover"
      />
      <h2 className="absolute left-0 top-1/2 -translate-y-1/2 font-bebas text-amber-100 z-10 text-6xl p-6 text-center w-full md:text-7xl lg:text-9xl  md:w-4/5 md:left-1/2 md:-translate-x-1/2">
        Transformando vidas e mudando destinos através de pequenas ações!
      </h2>
    </div>
  )
}
