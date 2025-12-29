import * as React from 'react'
import { graphql, Link, StaticQuery, useStaticQuery } from "gatsby"
import KookBoekRecept from '../kookboek-recept';

const KookboekKoksQuery = graphql`
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
                  kok
                }
              }
            }
          }
        }
`;

const KookBoekKokCloudComponent = () => {
  const data = useStaticQuery(KookboekKoksQuery);
  const recipes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const koks = [...new Set(recipes.flatMap(r => r.frontmatter.kok))];

  return(
     <div className="flex flex-wrap justify-center my-6">
            {koks.map(kok => (
            <div className="m-2 border border-gray-300 rounded-full px-4 py-1" key={kok}>
              <Link key={kok} to={`/kookboek/koks/${kok}`} style={{ margin: "0 10px" }}>
                {kok}
              </Link>
              </div>
            ))}
          </div>
  );

};

export default KookBoekKokCloudComponent;

