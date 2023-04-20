import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { Header } from '../components/Header'
import { HeadingBanner } from '../components/HeadingBanner'
import { CtaSection } from '../components/CtaSection'
import { Footer } from '../components/Footer'
import { Projects } from '../components/Projects'
import { Actions } from '../components/Actions'

const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeadingBanner />
      <CtaSection />
      <Projects />
      <Actions />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
