import { Link } from 'gatsby'
import React from 'react'

export const Actions = () => (
  <div className="p-6 lg:py-16 lg:w-[1024px] xl:w-[1280px] m-auto">
    <h2 className="font-bebas text-4xl lg:text-6xl mb-4">Ações</h2>
    <div className="flex flex-col md:flex-row gap-6 lg:gap-12">
      <article className="mb-6">
        <Link to="/detail">
          <img src="https://via.placeholder.com/640x480" className="mb-4" />
        </Link>
        <h3 className="font-bold text-2xl">
          <Link to="/detail">Ação na comunidade tal</Link>
        </h3>
        <span className="text-neutral-600 italic mb-4 block">10/07/2021</span>
        <p>
          <Link to="/detail">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Link>
        </p>
      </article>
      <div>
        <article className="mb-6 flex gap-4">
          <Link to="/detail" className=" max-w-[40%]">
            <img src="https://via.placeholder.com/640x480" className="mb-4" />
          </Link>
          <div>
            <h3 className="font-bold    ">
              <Link to="/detail">Ação na comunidade tal</Link>
            </h3>
            <span className="text-neutral-600 italic block">10/07/2021</span>
            <p>
              <Link to="/detail">
                Lorem Ipsum is simply dummy text of the printing
              </Link>
            </p>
          </div>
        </article>
        <article className="mb-6 flex gap-4">
          <Link to="/detail" className=" max-w-[40%]">
            <img src="https://via.placeholder.com/640x480" className="mb-4" />
          </Link>
          <div>
            <h3 className="font-bold    ">
              <Link to="/detail">Ação na comunidade tal</Link>
            </h3>
            <span className="text-neutral-600 italic block">10/07/2021</span>
            <p>
              <Link to="/detail">
                Lorem Ipsum is simply dummy text of the printing
              </Link>
            </p>
          </div>
        </article>
        <article className="mb-6 flex gap-4">
          <Link to="/detail" className=" max-w-[40%]">
            <img src="https://via.placeholder.com/640x480" className="mb-4" />
          </Link>
          <div>
            <h3 className="font-bold    ">
              <Link to="/detail">Ação na comunidade tal</Link>
            </h3>
            <span className="text-neutral-600 italic block">10/07/2021</span>
            <p>
              <Link to="/detail">
                Lorem Ipsum is simply dummy text of the printing
              </Link>
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
)
