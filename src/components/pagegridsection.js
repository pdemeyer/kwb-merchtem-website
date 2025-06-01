
import * as React from "react";

const PageGridSection = ( {sectionTitle, children}) => {
  return (
    <div class="mainpage-content">
    <div class="max-width-block"> 
      <div class="main-container-div">
          <h2 class="heading-78">{sectionTitle}</h2>
          <div class="grid-container">
              {children}
              </div>
         </div>
      </div>
    </div>
  )
};

export default PageGridSection;