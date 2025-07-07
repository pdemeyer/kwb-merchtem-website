import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"
import MarkDownPageComponent from './markdown-page-component'
 
const CorridaQuery = graphql`
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
// This component fetches the markdown data for the "corrida" page and renders it using MarkDownPageComponent
const CorridaPaginaComponent = () => (
  <StaticQuery query={CorridaQuery} render={data => (
  <div>
    <MarkDownPageComponent data={data} />
  </div>
)} />
);

export default CorridaPaginaComponent;