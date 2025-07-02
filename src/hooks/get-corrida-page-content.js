import { useStaticQuery, graphql } from "gatsby"

export const useCorridaPageContent = () => {
  const { data } = useStaticQuery(
    graphql`
  query {
    allMarkdownRemark(
      filter: { 
       frontmatter: { 
          pagetype: { eq: "corrida" }
          itemtype: { eq: "voorpagina" }
        }
      }) {
    edges {
      node {
        id
        frontmatter {
          title
          pagetype
          itemtype
        }
        excerpt
        html
        timeToRead
      }
    }
  }
}
`
  )
  return data.allMarkdownRemark
}