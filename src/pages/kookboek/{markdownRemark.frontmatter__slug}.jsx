import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/cards/layout"
import FullWidthContainer from "../../components/fullwidth-container"
import KookBoekReceptDetail from "../../components/kookboek-recept-detail"

export default function BlogPostTemplate(  { data: { markdownRemark } }, 
) {
  const { frontmatter, html } = markdownRemark
  return (

    <Layout showLogo="1" pageTitle="Kookboek. De bijbel voor de kwb-man.">
      <FullWidthContainer>
          <KookBoekReceptDetail title={frontmatter.title} date={frontmatter.date} kok={frontmatter.kok} foto={frontmatter.foto} html={html} />
      </FullWidthContainer>
    </Layout>
  )
}

{
  /*
        <div className="py-6 flex justify-center items-center">
  */
}

export const query = graphql`
  query BlogPostById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        kok
        date(formatString: "DD/MM/YYYY")
        slug
        foto {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      excerpt(pruneLength: 150)
      html
    }
  }
`