
import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"

const BestuurQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { 
       frontmatter: { 
          pagetype: { eq: "bestuur" }
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

const renderBestuurPage = (data) => {
  
  console.log(data)
  return (
    <div>
      {data.data.allMarkdownRemark.edges.map(({ node }) => (
      renderBestuurNode(node)
    ))}
    </div>
  )
}


const renderBestuurNode = (data) => {
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

const BestuurPagina = () => (
  <StaticQuery query={BestuurQuery} render={data => (
  <div>
    {renderBestuurPage({ data })}
  </div>
)}
 />);


export default BestuurPagina;
