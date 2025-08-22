import * as React from "react";
import FullWidthContainer from "../fullwidth-container";
import ContentSection from "../content-section";
import { Typography } from "@material-tailwind/react";

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

  const imgUrls = [ "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"]

  return (
    <ContentSection title={frontmatter.title} date={frontmatter.date} imgUrls={imgUrls}>
        
    <Typography variant="h3" color="blue-gray" className="mb-4">
          <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </Typography>
    </ContentSection>
    /*
  <div class="mainpage-content">
      <div class="main-container-div">
    <h1>{frontmatter.title}</h1>
    <p>{frontmatter.date}</p>
    <Typography variant="h3" color="blue-gray" className="mb-4">
          <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
    </Typography>
  </div>
  </div>
  */
  )
}

const MarkDownPageComponent = ( {data}) => {
    return renderPage({ data })
};

export default MarkDownPageComponent;
