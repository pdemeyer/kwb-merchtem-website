import * as React from 'react'
import Layout from '../components/layout'
import KleineRaak from "../components/kleineraak";
import PageGridSection from "../components/pagegridsection";
import Seo from '../components/seo'
import { graphql, StaticQuery } from "gatsby"


const KleineRakenPage = () => (
   <StaticQuery
      query={graphql`
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
      `}
      render={data => (
        <Layout pageTitle="Kleine raak. Het maandblad.">
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
    </Layout>
      )}
    />
  
  );

export const Head = () => <Seo title="Kleine Raak" />

export default KleineRakenPage