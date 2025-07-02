import * as React from "react";
import FullWidthContainer from "../fullwidth-container";

const renderPage = (data) => {
  return (
    <div>
      {data.data.allMarkdownRemark.edges.map(({ node }) => (
      renderNode(node)
    ))}
    </div>
  )
}

const renderNode = (data) => {
  const { frontmatter, html } = data
  return (
  <div class="mainpage-content">
      <div class="main-container-div">
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.date}</p>
    <FullWidthContainer>
          <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
  </FullWidthContainer>
  </div>
  </div>
  )
}

const MarkDownPageComponent = ( {data}) => {
    return renderPage({ data })
};

export default MarkDownPageComponent;
