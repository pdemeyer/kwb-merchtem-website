import React from "react";
import { StaticQuery } from "gatsby";
import MarkDownPageComponent from "../components/page-components/markdown-page-component";
import { graphql } from 'gatsby'
 
const AlgemeenKwbQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { 
       frontmatter: { 
          pagetype: { eq: "algemeen-kwb" }
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
const AlgemeenKwbComponent = () => (
  <StaticQuery query={AlgemeenKwbQuery} render={data => (
    <MarkDownPageComponent data={data} />
)} />
);

export default AlgemeenKwbComponent;
