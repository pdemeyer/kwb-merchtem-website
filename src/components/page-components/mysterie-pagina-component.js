import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"
import MarkDownPageComponent from './markdown-page-component'
 
const MysterieQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { 
       frontmatter: { 
          pagetype: { eq: "mysterie" }
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
          image {
            id
            sourceInstanceName
            absolutePath
            relativePath
            publicURL
          }
        }
        excerpt
        html
        timeToRead
      }
    }
  }
}
`
// This component fetches the markdown data for the "Mysterie van de nacht" page and renders it using MarkDownPageComponent
const MysteriePaginaComponent = () => (
  <StaticQuery query={MysterieQuery} render={data => (
  <div>
    <MarkDownPageComponent data={data} />
  </div>
)} />
);

export default MysteriePaginaComponent;