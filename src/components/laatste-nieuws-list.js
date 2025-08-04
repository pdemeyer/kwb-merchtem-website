import * as React from "react";
import { graphql, StaticQuery } from "gatsby"
import ActiviteitenLinks from "./activiteiten-links";

const LaatsteNieuwsList = ({showTitle}) => (
   <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
            sort: { frontmatter: {date: DESC }}
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
        if ( node.frontmatter.featureUntil) { 
          const featureUntilDate = new Date(node.frontmatter.featureUntil);
          return featureUntilDate >= currentDate;
        }
        else {
          return true; // Geen featureUntil betekent dat het altijd zichtbaar is
        }
      }
      )
      .slice(0, 5) // Beperk tot de 5 laatste nieuwtjes

      if (!nieuwtjes || nieuwtjes.length === 0) {
        return <p>Er is momenteel geen nieuws te melden.</p>;
      }
      
      return <ActiviteitenLinks activiteiten={nieuwtjes} titel="Nieuwtjes" showTitle={showTitle} />
    }
  }
  />
);

export default LaatsteNieuwsList;


/*
 
*/