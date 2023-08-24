import { Link } from 'gatsby'
import React from 'react'
import actions from '../../actions.json'

export const Actions = () => {
  const firstAction = actions.data[0]

  return (
    <div className="p-6 lg:px-0 lg:py-16 lg:w-[1024px] xl:w-[1280px] m-auto">
      <h2 className="font-bebas text-4xl lg:text-6xl mb-4">Ações</h2>
      <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
        <article className="mb-6">
          <Link to={firstAction.url}>
            <img src={firstAction.image} className="mb-4" />
          </Link>
          <h3 className="font-bold text-2xl">
            <Link to={firstAction.url}>{firstAction.title}</Link>
          </h3>
          <span className="text-neutral-600 italic mb-4 block">
            {firstAction.date}
          </span>
          <p>
            <Link to={firstAction.url}>{firstAction.desc}</Link>
          </p>
        </article>
        <div>
          {actions.data.slice(1).map((action) => (
            <article className="mb-6 flex gap-4" key={action.id}>
              <Link to={action.url} className=" max-w-[40%]">
                <img
                  src={action.image}
                  className="mb-4"
                />
              </Link>
              <div>
                <h3 className="font-bold">
                  <Link to={action.url}>{action.title}</Link>
                </h3>
                <span className="text-neutral-600 italic block">
                  {action.date}
                </span>
                <p>
                  <Link to={action.url}>
                    {action.desc}
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
