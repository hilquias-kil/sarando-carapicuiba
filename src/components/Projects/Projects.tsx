import React from 'react'

export const Projects = () => (
  <>
    <section className="px-6 py-12 lg:px-0 lg:py-16 lg:w-[1024px] xl:w-[1280px] lg:m-auto  md:items-start md:gap-6 lg:gap-12 ">
      <h2 className="font-bebas text-4xl mb-6 md:text-6xl">Nossos Projetos</h2>

      <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
        <article className=''>
          <a href="/projetos/capacitacao-profissional" className='w-full h-[200px] overflow-hidden block relative'>
            <img src="/capacitacao-profissional.webp" className=" w-full h-full object-cover" />
            <h3 className='absolute left-0 bottom-0 bg-black bg-opacity-50 p-4 w-full text-white font-bebas text-3xl'>Capacitação profissional</h3>
          </a>
        </article>
        <article className=''>
          <a href="#" className='w-full h-[200px] overflow-hidden block relative'>
            <img src="/bateria.webp" className=" w-full h-full object-cover" />
            <h3 className='absolute left-0 bottom-0 bg-black bg-opacity-50 p-4 w-full text-white font-bebas text-3xl'>aula de bateria</h3>
          </a>
        </article>
        <article className=''>
          <a href="#" className='w-full h-[200px] overflow-hidden block relative'>
            <img src="/iv.webp" className=" w-full h-full object-cover" />
            <h3 className='absolute left-0 bottom-0 bg-black bg-opacity-50 p-4 w-full text-white font-bebas text-3xl'>Instituto de Vencedores</h3>
          </a>
        </article>
        <article className=''>
          <a href="#" className='w-full h-[200px] overflow-hidden block relative'>
            <img src="/Jiu-jitsu.webp" className=" w-full h-full object-cover" />
            <h3 className='absolute left-0 bottom-0 bg-black bg-opacity-50 p-4 w-full text-white font-bebas text-3xl'>Aulas de Jiu-jítsu</h3>
          </a>
        </article>
        <article className=''>
          <a href="#" className='w-full h-[200px] overflow-hidden block relative'>
            <img src="/revisao-de-vidas.webp" className=" w-full h-full object-cover" />
            <h3 className='absolute left-0 bottom-0 bg-black bg-opacity-50 p-4 w-full text-white font-bebas text-3xl'>Revisão de vidas</h3>
          </a>
        </article>
      </div>
    </section>
  </>
)
