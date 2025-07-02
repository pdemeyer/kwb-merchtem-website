
import * as React from "react";

const PageListSection = ( {sectionTitle, children}) => {
  return (
    <div class="mainpage-content">
      <div class="main-container-div">
          <h2 class="heading-78">{sectionTitle}</h2>
          <div class="list-container">
              {children}
          </div>
    </div>
    </div>
  )
};

export default PageListSection;