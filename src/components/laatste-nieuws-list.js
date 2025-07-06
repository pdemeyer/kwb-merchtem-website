import * as React from "react";
import { graphql, StaticQuery } from "gatsby"
import ActiviteitenLinks from "./activiteiten-links";

const LaatsteNieuwsList = ({showTitle}) => (
   <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
            sort: { frontmatter: {date: ASC }}
            filter: { 
                     frontmatter: { 
                        pagetype: { eq: "nieuws" },
                      }
                }
      ) {
          edges {
            node {
              id
              frontmatter {
                title
                slug
                date
                featureUntil
              }
              excerpt
            }
          }
        }
      }
    `}
    render={data => {
      const currentDate = new Date();
      
      const { edges } = data.allMarkdownRemark;

      const nieuwtjes = edges
      .filter(({ node }) => {
        const featureUntilDate = new Date(node.frontmatter.featureUntil);
        return featureUntilDate >= currentDate;
      })

      if (!nieuwtjes || nieuwtjes.length === 0) {
        return <p>Er is momenteel geen nieuws te melden.</p>;
      }
      
      //.slice(0, 5) // Beperk tot de eerste 5 komende activiteiten
      //.map(({ node }) =>  { if (new Date(node.frontmatter.date) >= currentDate) { return "true" } });
      
      return <ActiviteitenLinks activiteiten={nieuwtjes} titel="Nieuwtjes" showTitle={showTitle} />
    }
  }
  />
);

export default LaatsteNieuwsList;


/*
 
*/