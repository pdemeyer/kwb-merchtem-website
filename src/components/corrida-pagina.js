
import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"

const CorridaQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { 
       frontmatter: { 
          pagetype: { eq: "corrida" }
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
`


const renderCorridaPage = (data) => {
  
  console.log(data)
  return (
    <div>
      {data.data.allMarkdownRemark.edges.map(({ node }) => (
      renderCorridaNode(node)
    ))}
    </div>
  )
}


const renderCorridaNode = (data) => {
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

const CorridaPagina = () => (
  <StaticQuery query={CorridaQuery} render={data => (
  <div>
    {renderCorridaPage({ data })}
  </div>
)}
 />);


export default CorridaPagina;
