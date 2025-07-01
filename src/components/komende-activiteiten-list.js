import * as React from "react";
import { graphql, StaticQuery } from "gatsby"
import ActiviteitenLinks from "./activiteiten-links";

const KomendeActiviteitenList = () => (
   <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
            sort: { frontmatter: {date: ASC }}
            filter: { 
                     frontmatter: { 
                        pagetype: { eq: "activiteiten" },
                        date: { gt: "2025-07-01" }
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
      <ActiviteitenLinks activiteiten={data.allMarkdownRemark.edges} titel="Komende activiteiten" />
    )}
  />
);

export default KomendeActiviteitenList;
