import * as React from "react";
import { graphql, useStaticQuery, StaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

const VoorbijeActiviteiten = () => (
   <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }
                  filter: { 
                     frontmatter: { 
                        pagetype: { eq: "activiteiten" }
                        date: { lt: "2025-02-01" }
            }
                  }) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h3>Voorbije activiteiten</h3>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.id}>
              {node.frontmatter.date} || {node.frontmatter.title}
              {/*
              <p>{node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
              */}
            </li>
          ))}
        </ul>
      </div>
    )}
  />

   );


export default VoorbijeActiviteiten;
