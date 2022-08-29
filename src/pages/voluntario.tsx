import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { HeadingPages } from '../components/HeadingPages'

const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeadingPages title="Seja um voluntário" />

      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Seja um voluntario</title>
