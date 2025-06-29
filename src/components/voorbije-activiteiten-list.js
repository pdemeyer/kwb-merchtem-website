import * as React from "react";
import { graphql, StaticQuery } from "gatsby"
import ActiviteitenLinks from "./activiteiten-links";

const VoorbijeActiviteitenList = () => (
   <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
            sort: { frontmatter: {date: DESC }}
            filter: { 
                     frontmatter: { 
                        pagetype: { eq: "activiteiten" },
                        date: { lte: "2025-06-25" }
                      }
                }
            limit: 5
      ) {
          edges {
            node {
              id
              frontmatter {
                title
                slug
                date(formatString: "DD/MM/YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => (
      <ActiviteitenLinks activiteiten={data.allMarkdownRemark.edges} titel="Voorbije activiteiten" />
    )}
  />

   );



   /*
       <div>
        <h3>Komende activiteiten</h3>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <li key={node.id}>
              <ActiviteitLink slug={`/activiteiten/${node.frontmatter.slug}`}
                title={node.frontmatter.title} date={node.frontmatter.date} ></ActiviteitLink>
            </li>
          ))}
        </ul>
      </div>
       */

export default VoorbijeActiviteitenList;
