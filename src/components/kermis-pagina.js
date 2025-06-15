
import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"

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
  //console.log(data)
  const { frontmatter, html, timeToRead, excerpt } = data
  //console.log(frontmatter.title)
  return (
  <div>
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.date}</p>
    <div
      className="blog-post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
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
