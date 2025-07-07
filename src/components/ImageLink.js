
import * as React from "react";
import ListCol2Item from "./list-col-2-item";


const ImageLink = ( {link, title, imgAltText, imgUrl, children}) => {
  return (
    <ListCol2Item section="/kleine-raken" >
      <a href={link} className="post-picture-item">
        <div class="post-text-box">
          <div class="small-caps-text-copy">
            <h3 class="post-item-title">{title}</h3>
          </div>
          <div class="tile-heading-2 top-padding"> </div>
        </div>
        <div class="post-picture-picture">
          <img alt={imgAltText} src={imgUrl} class="kleine-raak-small-image"/>
        </div>
      </a>
    </ListCol2Item>
  );
};

export default ImageLink;
