import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const IndexPage = () => {
  return (
    <main>
      <Header />
      <h1>Seja um voluntario</h1>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Seja um voluntario</title>
