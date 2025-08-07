import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"
import MarkDownPageComponent from './markdown-page-component'
 
const CorridaUitslagenQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { 
       frontmatter: { 
          pagetype: { eq: "corrida-uitslagen" }
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
const CorridaUitslagenPaginaComponent = () => (
  <StaticQuery query={CorridaUitslagenQuery} render={data => (
  <div>
    <MarkDownPageComponent data={data} />
  </div>
  
)} />
);

export default CorridaUitslagenPaginaComponent;