import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import Activiteit from "../../components/actitiveit"

export default function BlogPostTemplate(  { data: { markdownRemark } }, // this prop will be injected by the GraphQL query below.
) {
  const { frontmatter, html } = markdownRemark
  return (

    <Layout>
      <Activiteit title={frontmatter.title} date={frontmatter.date} html={html} />
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

/*


export const pageQuery = graphql`
  query {
        allMarkdownRemark(
            sort: { frontmatter: {date: ASC }}
            filter: { 
                     frontmatter: { 
                        pagetype: { eq: "activiteiten" }
                    }
        }
      ) {
          edges {
            node {
              id
              frontmatter {
                title
                slug
                date(formatString: "DD/MM/YYYY")
              }
              excerpt
              html
            }
          }
        }
      }
`

*/