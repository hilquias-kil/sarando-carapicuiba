import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { Header } from '../components/Header'
import { HeadingBanner } from '../components/HeadingBanner'
import { CtaSection } from '../components/CtaSection'
import { Actions } from '../components/Actions/Actions'
import { Footer } from '../components/Footer'

const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeadingBanner />
      <CtaSection />
      <Actions />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
