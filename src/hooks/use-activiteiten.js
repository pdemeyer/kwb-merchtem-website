import { useStaticQuery, graphql } from "gatsby"

export const useActiviteiten = () => {
  const  data  = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
            sort: { frontmatter: {date: DESC }}
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
                date
              }
              excerpt
              html
            }
          }
        }
      }
    `
  )
  return data.allMarkdownRemark.edges
}