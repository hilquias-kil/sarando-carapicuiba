import { Link } from 'gatsby'
import React from 'react'

const Container = ({
  children,
  dark,
}: {
  children: React.ReactNode
  dark?: boolean
}) => (
  <div
    className={` ${
      dark ? 'bg-cyan-800 justify-end ' : 'bg-amber-100'
    } flex-grow flex `}
  >
    <div
      className={`px-6 py-8 lg:px-0 lg:py-10 lg:w-[calc(1024px/2)] xl:w-[calc(1280px/2)] box-border ${
        dark ? 'lg:pr-10' : 'lg:pl-10'
      } `}
    >
      {children}
    </div>
  </div>
)

export const CtaSection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Container dark>
        <h3 className="font-bebas text-4xl lg:text-6xl text-white mb-4">
          faca uma doação
        </h3>
        <p className="text-white mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <Link
          to="doacoes"
          className="bg-cyan-500 hover:bg-cyan-600 transition-colors px-4 py-2 inline-block rounded text-white"
        >
          Doe agora
        </Link>
      </Container>
      <Container>
        <h3 className="font-bebas text-4xl lg:text-6xl text-cyan-800 mb-4">
          Seja um voluntario
        </h3>
        <p className="text-cyan-800 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <Link
          to="voluntario"
          className="bg-cyan-800 hover:bg-cyan-900 transition-colors px-4 py-2 inline-block rounded text-white"
        >
          Quero fazer parte
        </Link>
      </Container>
    </div>
  )
}
