import * as React from "react"
import type { HeadFC } from "gatsby"
import { Header } from "../components/Header"
import { HeadingBanner } from "../components/HeadingBanner"

const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeadingBanner />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
