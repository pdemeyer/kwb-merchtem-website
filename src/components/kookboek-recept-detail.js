
import { GatsbyImage } from "gatsby-plugin-image";
import FullWidthContainer from "./fullwidth-container";
import * as React from "react";
import { Link } from "gatsby";

const KookBoekReceptDetail = ( {title, date, html, kok, foto, tags }) => {
  return (
    <FullWidthContainer>
      <div className="m-6">
        <div className="title-section mb-12 text-center">
          <div className="title text-4xl">{title}</div>
          <div className="subtitle">{date}</div>
          <div><i>{kok}</i></div>
          <div className="flex justify-center mt-4">
                    {tags.map(tag => (
                      <div className="m-2 border border-gray-300 rounded-full px-4 py-1" key={tag}>
                        <Link to={`/kookboek/tags/${tag}`}>{tag}</Link>
                      </div>
                    ))}
                  </div>
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
