import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"
import KleineRaak from "../kleineraak";

const KleineRakenQuery = graphql`
        query {
          allMarkdownRemark(
                    filter: { 
                       frontmatter: { 
                          pagetype: { eq: "kr" } }
                       },
                    sort:  [ { frontmatter: {jaar: DESC} },
                             { frontmatter: {maand: DESC} } ]
              ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  jaar
                  maand
                  volgnummer
                }
                excerpt
                html
              }
            }
          }
        }
      `;

const KleineRakenPaginaComponent = () => (
  <StaticQuery query={KleineRakenQuery} render={data => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-screen-xl mx-auto">
               {data.allMarkdownRemark.edges.map(({ node }) => (

                <KleineRaak jaar={node.frontmatter.jaar} 
                            maand={node.frontmatter.maand} 
                            volgnummer={node.frontmatter.volgnummer}
                            excerpt={node.excerpt}
                            html={node.html}>
                </KleineRaak>
            ))}
    </div>
)}
 />);

export default KleineRakenPaginaComponent;
