
import * as React from "react";

const VisualDisplay = ({imgUrl, altName} ) => {
  const affiche = imgUrl;
  return (
    <div class="post-picture-picture">
     <img src={affiche} alt={{altName}} 
      style={{ height: "300px" }}  />
    </div>
  );
};

export default VisualDisplay;
