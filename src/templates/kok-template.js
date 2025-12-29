import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/cards/layout";
import KookBoekRecept from "../components/kookboek-recept";

export default function TagTemplate({ data, pageContext }) {
  const recipes = data.allMarkdownRemark.nodes;
  return (
    
    <Layout showLogo={true} pageTitle="Kookboek. De bijbel voor de kwb-man.">
    <div>
        <div className="flex flex-wrap justify-center my-6">
            <h1>Recepten van kok: {pageContext.kok}</h1>
      </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-screen-xl mx-auto">
               {recipes.map(
                (node) => (
                <KookBoekRecept key={node.frontmatter.slug} datum={node.frontmatter.date} 
                            title={node.frontmatter.title}
                            kok={node.frontmatter.kok}
                            excerpt={node.excerpt}
                            slug={node.frontmatter.slug}
                            foto={node.frontmatter.foto}
                            tags={node.frontmatter.tags}
                            html={node.html}>
                </KookBoekRecept>
            ))}
    </div>
    </div>
    
    </Layout>
  );
}

/*

      <KookBoekTagCloudComponent />
*/

export const query = graphql`
  query($kok: String!) {
    allMarkdownRemark(filter: { frontmatter: { 
                                    kok: { eq: $kok }
                                    pagetype: { eq: "kookboek" }
                } }) {
      nodes {
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
            tags
          }
        }
      }
    }
`;
