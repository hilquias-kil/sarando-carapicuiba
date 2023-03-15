import * as React from 'react'
import type { HeadFC } from 'gatsby'
import { Header } from '../components/Header'
import { HeadingBanner } from '../components/HeadingBanner'
import { CtaSection } from '../components/CtaSection'
import { Footer } from '../components/Footer'
import { Projects } from '../components/Projects'

const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeadingBanner />
      <CtaSection />
      <Projects />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
