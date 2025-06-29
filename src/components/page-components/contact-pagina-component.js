
import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"
import MarkDownPageComponent from '../markdown-page-component'
 
const ContactQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { 
       frontmatter: { 
          pagetype: { eq: "contact" }
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

const ContactPaginaComponent = () => (
  <StaticQuery query={ContactQuery} render={data => (
  <div>
    <MarkDownPageComponent data={data} />
    
  </div>
)} />
);

export default ContactPaginaComponent;
