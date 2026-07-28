import * as React from "react";
import ContentSection from "../content-section";
import { Typography } from "@material-tailwind/react";

const renderPage = (data, imgUrls) => {
  return (
    <div>
      {data.data.allMarkdownRemark.edges.map(({ node }) => (
      renderNode(node, imgUrls)
    ))}
    </div>
  )
}

const renderNode = (data, imgUrls) => {
  const { frontmatter, html } = data

  if(!imgUrls) {
    imgUrls = [];
  }

  else {
    if (imgUrls.length === 0) {
      if(frontmatter.image && frontmatter.image.publicURL ) {
        imgUrls.push( frontmatter.image.publicURL )
      }
    }
    if (imgUrls.length === 0) {
      imgUrls.push( "/images/kookavond.jpg" )
    }
  }

  return (
    <ContentSection title={frontmatter.title} date={frontmatter.date} imgUrls={imgUrls}>  
      <Typography className="mb-6" dangerouslySetInnerHTML={{ __html: html }} >
      </Typography>
    </ContentSection>
  )
}

const MarkDownPageComponent = ( {data, imgUrls}) => {
    return renderPage({ data }, imgUrls)
};

export default MarkDownPageComponent;
