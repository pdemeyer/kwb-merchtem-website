import * as React from "react";
import { graphql, StaticQuery } from "gatsby"

const VoorbijeActiviteiten = () => (
   <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
            sort: { frontmatter: {date: DESC }}
            filter: { 
                     frontmatter: { 
                        pagetype: { eq: "activiteiten" },
                        date: { lt: "2025-03-30" }
                    }
                  }
            limit: 5) {
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
