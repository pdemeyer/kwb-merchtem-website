
import * as React from 'react'
import { graphql, StaticQuery } from "gatsby"
import MarkDownPageComponent from './markdown-page-component'
 
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


const CorridaPaginaComponent = () => (
  <StaticQuery query={CorridaQuery} render={data => (
  <div>
    <MarkDownPageComponent data={data} />
    
  </div>
)} />
);

export default CorridaPaginaComponent;


/*
 
    {renderCorridaPage({ data })}
*/

/*
const renderCorridaPage = (data) => {
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
*/