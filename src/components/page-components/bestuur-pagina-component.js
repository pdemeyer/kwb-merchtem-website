
import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"
import MarkDownPageComponent from './markdown-page-component';
import { Button } from "@material-tailwind/react";

const BestuurQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { 
       frontmatter: { 
          pagetype: { eq: "bestuur" }
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
`;

const BestuurPaginaComponent = () => (
  <StaticQuery query={BestuurQuery} render={data => (
    <MarkDownPageComponent data={data} />
)}
 />);

export default BestuurPaginaComponent;
