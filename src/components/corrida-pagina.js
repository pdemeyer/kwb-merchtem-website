
import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"
import FullWidthContainer from './fullwidth-container'

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
  <div class="mainpage-content">
    <div class="max-width-block"> 
      <div class="main-container-div">
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.date}</p>
    <FullWidthContainer>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
  </FullWidthContainer>
  </div>
  </div>
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
