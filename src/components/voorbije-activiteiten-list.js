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
                        pagetype: { eq: "activiteiten" }
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
        return <p>Er zijn momenteel geen voorbije activiteiten.</p>;
      }
      
      const currentDate = new Date();

      // Filter eerst voor voorbije activiteiten
      const voorbijeActiviteiten = edges
      .filter(({ node }) => {
        const activiteitDate = new Date(node.frontmatter.date);
        return activiteitDate < currentDate;
      })
      .slice(0, 5) // Beperk tot de laatste 5 voorbije activiteiten
      //.map(({ node }) =>  { if (new Date(node.frontmatter.date) >= currentDate) { return "true" } });
      
      console.log("Voorbije activiteiten:", voorbijeActiviteiten);
      return <ActiviteitenLinks activiteiten={voorbijeActiviteiten} showTitle={true} titel="Voorbije activiteiten" />
    }}
  />
   );



   /*
        <div >Voorbije edges: {voorbijeActiviteiten.length}</div>

.toLocaleString("nl-BE")

   (formatString: "DD/MM/YYYY")



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
