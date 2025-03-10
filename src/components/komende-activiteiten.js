import * as React from "react";
import { graphql, StaticQuery } from "gatsby"

const KomendeActiviteiten = () => (
   <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { frontmatter: {date: ASC }}
                  filter: { 
                     frontmatter: { 
                        pagetype: { eq: "activiteiten" },
                        date: { gt: "2025-02-01" }
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
        <h3>Komende activiteiten</h3>
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

{/*
   const data = useStaticQuery(graphql`
      query activiteitenQuery {
        allMarkdownRemark (
            filter: { 
               frontmatter: { 
                  pagetype: { eq: "activiteiten" } } 
               }) {
          edges {
            node {
              html
              headings {
                depth
                value
              }
            }
          }
        }
      }
    `)
    

  return (
   <div class="post-text-box">
      <div class="small-caps-text-copy">
         <h3>Komende activiteiten</h3>
      </div>
      <div class="tile-heading-2 top-padding">
         <ul>
         {data.allMarkdownRemark.edges.map(({ data }) => (
            <li key={node.id}>{node.frontmatter.title}</li>
         ))}
         </ul>
      </div>
   </div>
  );
};

*/}


{/*
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
*/}

export default KomendeActiviteiten;
