
import { GatsbyImage } from "gatsby-plugin-image";
import FullWidthContainer from "./fullwidth-container";
import * as React from "react";

const KookBoekReceptDetail = ( {title, date, html, kok, foto }) => {
  return (
    <FullWidthContainer>
      <div className="m-6">
        <div className="title-section mb-12 text-center">
          <div className="title text-4xl">{title}</div>
          <div className="subtitle">{date}</div>
          <div><i>{kok}</i></div>
        </div>
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start" >
          <GatsbyImage image={foto ? foto.childImageSharp.gatsbyImageData : null} alt="Recept Foto" className="my-4" />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        </div>
    </FullWidthContainer>
  );
};

export default KookBoekReceptDetail;
