import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import PageListSection from '../components/pagelistsection'
import { graphql, StaticQuery } from "gatsby"


export const query = graphql`
        query {
          allMarkdownRemark(
            filter: { 
             frontmatter: { 
                pagetype: { eq: "bestuur" } 
              }
            }                 
          ) {
            edges {
              node {
                id
                frontmatter {
                  title
                }
                excerpt
              html
              timeToRead
              }
            }
          }
        }
      `
   const IndexPage = ({ data }) =>(
        <Layout showLogo="1" pageTitle={data.frontmatter.title}>
          <PageListSection sectionTitle={"Het bestuur"}>
            
            {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
               )
            } )}
              
          </PageListSection>
        </Layout>
      );


   {/*
                    dangerouslySetInnerHTML={{ __html: node.html }} */}

export const Head = () => <Seo title="kwb Bestuur" />

export default IndexPage

