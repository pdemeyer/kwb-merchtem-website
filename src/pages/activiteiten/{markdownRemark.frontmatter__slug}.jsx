import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Activiteit from "../../components/actitiveit"
import FullWidthContainer from "../../components/fullwidth-container"

export default function BlogPostTemplate(  { data: { markdownRemark } }, // this prop will be injected by the GraphQL query below.
) {
  const { frontmatter, html } = markdownRemark
  return (

    <Layout  showLogo="1" pageTitle="kwb Merchtem. Beleef meer.">
      <FullWidthContainer>
        <Activiteit title={frontmatter.title} date={frontmatter.date} html={html} />
      </FullWidthContainer>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`