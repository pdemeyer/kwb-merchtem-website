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
                      }
                }
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
    render={data => {
      const { edges } = data.allMarkdownRemark;
      if (!edges || edges.length === 0) {
        return <p>Er zijn momenteel geen komende activiteiten.</p>;
      }
      
      const currentDate = new Date();

      // Filter eerst voor komende activiteiten
      const komendeActiviteiten = edges
      .filter(({ node }) => {
        const activiteitDate = new Date(node.frontmatter.date);
        return activiteitDate >= currentDate;
      })
      .slice(0, 5) // Beperk tot de eerste 5 komende activiteiten
      //.map(({ node }) =>  { if (new Date(node.frontmatter.date) >= currentDate) { return "true" } });
      
      return <ActiviteitenLinks activiteiten={komendeActiviteiten} titel="Komende activiteiten" />
    }
  }
  />
);

export default KomendeActiviteitenList;
