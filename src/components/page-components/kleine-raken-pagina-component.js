import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"
import KleineRaak from "../kleineraak";
import PageGridSection from "../pagegridsection";

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
    <PageGridSection sectionTitle={"Kleine Raken"}>
               {data.allMarkdownRemark.edges.map(({ node }) => (

                <KleineRaak jaar={node.frontmatter.jaar} 
                            maand={node.frontmatter.maand} 
                            volgnummer={node.frontmatter.volgnummer}
                            excerpt={node.excerpt}
                            html={node.html}>
                </KleineRaak>
            ))}
          </PageGridSection>
)}
 />);

export default KleineRakenPaginaComponent;
