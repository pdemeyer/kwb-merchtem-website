import * as React from 'react'
import { graphql, Link, StaticQuery, useStaticQuery } from "gatsby"
import KookBoekRecept from '../kookboek-recept';

const KookboekTagsQuery = graphql`
query {
          allMarkdownRemark(
                    filter: { 
                       frontmatter: { 
                          pagetype: { eq: "kookboek" } }
                       }
              ) {
            edges {
              node {
                id
                frontmatter {
                  tags
                }
              }
            }
          }
        }
`;

const KookBoekTagCloudComponent = () => {
  const data = useStaticQuery(KookboekTagsQuery);
  const recipes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const tags = [...new Set(recipes.flatMap(r => r.frontmatter.tags))];

  return(
     <div className="flex flex-wrap justify-center my-6">
            {tags.map(tag => (
              
            <div className="m-2 border border-gray-300 rounded-full px-4 py-1" key={tag}>
              <Link key={tag} to={`/kookboek/tags/${tag}`} style={{ margin: "0 10px" }}>
                {tag}
              </Link>
              </div>
            ))}
          </div>
  );

};

export default KookBoekTagCloudComponent;


/*

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-screen-xl mx-auto">
               {data.allMarkdownRemark.edges.map(({ node }) => (

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
*/
