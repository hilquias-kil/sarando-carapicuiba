import * as React from "react"
import type { HeadFC } from "gatsby"
import { Header } from "../components/Header"

const IndexPage = () => {
  return (
    <main>
      <Header />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
