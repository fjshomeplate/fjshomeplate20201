import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

<header>
<h1>
FJSHomeplate
</h1>
</header>
<div id="intro">
<h2>
We are a Game Studio
</h2>
<h2>
We are an App Builder
</h2>
<h2>
We are Innovators
</h2>
</div>
  </Layout>
)

export default IndexPage
