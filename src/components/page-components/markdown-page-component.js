import * as React from "react";
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

  const imgUrls = []; 

  if(frontmatter.image && frontmatter.image.publicURL ) {
    imgUrls.push( frontmatter.image.publicURL )
  }
  else {
    imgUrls.push( "/images/kookavond.jpg" )
  }

  console.log("image:", frontmatter.image)

  return (
    <ContentSection title={frontmatter.title} date={frontmatter.date} imgUrls={imgUrls}>  
      <Typography className="mb-4" dangerouslySetInnerHTML={{ __html: html }} >
      </Typography>
    </ContentSection>
  )
}

const MarkDownPageComponent = ( {data}) => {
    return renderPage({ data })
};

export default MarkDownPageComponent;
