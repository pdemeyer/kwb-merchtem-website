
import * as React from "react";

const VisualDisplay = ({linkTo, imgUrl, altName} ) => {
  const affiche = imgUrl;
  return (
    <div class="post-picture-picture">
      <a href={linkTo} class="post-picture-link">
     <img src={affiche} alt={{altName}} 
      style={{ height: "300px" }}  />
      </a>
    </div>
  );
};

export default VisualDisplay;
