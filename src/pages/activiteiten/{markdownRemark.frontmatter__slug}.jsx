import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/cards/layout"
import FullWidthContainer from "../../components/fullwidth-container"
import ActiviteitDetail from "../../components/cards/activiteit-detail-card"

export default function BlogPostTemplate(  { data: { markdownRemark } }, 
) {
  const { frontmatter, html } = markdownRemark
  return (

    <Layout  showLogo="1" pageTitle="kwb Merchtem. Beleef meer.">
      <FullWidthContainer>
        <ActiviteitDetail title={frontmatter.title} date={frontmatter.date} html={html} />
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