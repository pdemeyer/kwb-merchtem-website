import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"
import KookBoekRecept from '../kookboek-recept';

const KookboekQuery = graphql`
        query {
          allMarkdownRemark(
                    filter: { 
                       frontmatter: { 
                          pagetype: { eq: "kookboek" } }
                       },
                    sort:  [ { frontmatter: {date: DESC} }]
              ) {
            edges {
              node {
                id
                frontmatter {
                  title
                  kok
                  date(formatString: "DD/MM/YYYY")
                  slug
                  foto {
                    childImageSharp {
                      gatsbyImageData(width: 800)
                    }
                  }
                }
                excerpt(pruneLength: 150)
                html
              }
            }
          }
        }
      `;


const KookBoekPaginaComponent = () => (
  <StaticQuery query={KookboekQuery} render={data => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-screen-xl mx-auto">
               {data.allMarkdownRemark.edges.map(({ node }) => (

                <KookBoekRecept key={node.frontmatter.slug} datum={node.frontmatter.date} 
                            title={node.frontmatter.title}
                            kok={node.frontmatter.kok}
                            excerpt={node.excerpt}
                            slug={node.frontmatter.slug}
                            foto={node.frontmatter.foto}
                            html={node.html}>
                </KookBoekRecept>
            ))}
    </div>
)}
 />);

export default KookBoekPaginaComponent;
