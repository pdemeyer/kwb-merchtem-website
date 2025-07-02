
import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"
import FullWidthContainer from './fullwidth-container';

const kermisQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { 
       frontmatter: { 
          pagetype: { eq: "kermis" }
          itemtype: { eq: "voorpagina" }
        }
      }) {
    edges {
      node {
        id
        frontmatter {
          title
          pagetype
          itemtype
        }
        excerpt
        html
        timeToRead
      }
    }
  }
}
`;

const renderKermisPage = (data) => {
  
  console.log(data)
  return (
    <div>
      {data.data.allMarkdownRemark.edges.map(({ node }) => (
      renderKermisNode(node)
    ))}
    </div>
  )
}


const renderKermisNode = (data) => {
  const { frontmatter, html } = data
  return (
  <div>
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.date}</p>
    <FullWidthContainer>
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
    </FullWidthContainer>
  </div>
  )
}

const KermisPagina = () => (
  <StaticQuery query={kermisQuery} render={data => (
  <div>
    {renderKermisPage({ data })}
  </div>
)}
 />);


export default KermisPagina;
