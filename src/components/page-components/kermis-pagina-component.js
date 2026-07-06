import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"
import MarkDownPageComponent from './markdown-page-component'
 
const KermisQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { 
       frontmatter: { 
          pagetype: { eq: "kermis" }
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

// This component fetches the markdown data for the "kermis" page and renders it using MarkDownPageComponent
const KermisPaginaComponent = () => (
  <StaticQuery query={KermisQuery} render={data => (
  <div>
    <MarkDownPageComponent data={data} />
  </div>
)} />
);

export default KermisPaginaComponent;