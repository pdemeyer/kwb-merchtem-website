import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'


const KomendeActiviteitenPage = ({ data }) => {
  return (
    <Layout pageTitle="Komende activiteiten">
      
        <div>
      {data.allMarkdownRemark.edges.map((node) => (
          <article key={node.id}>
            <h2> {/*}
              <Link to={`/activiteiten/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
              {node.frontmatter.title}
              */}
            </h2>
            {node.html}
            { /*
            <p>Posted: {node.frontmatter.date}</p>
            */}
            
            <p>{node.excerpt}</p>
          </article>
        ))}
        </div>
      
    </Layout>
  )
}

export const query = graphql`
  query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }
                  filter: { 
                     frontmatter: { 
                        pagetype: { eq: "activiteiten" }
                        date: { gt: "2025-02-01" }
            }
                  }) {
          edges {
            node {
              id
              html
              frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
              }
              excerpt
            }
          }
        }
      }
`

export const Head = () => <Seo title="Komende activiteiten" />

export default KomendeActiviteitenPage

