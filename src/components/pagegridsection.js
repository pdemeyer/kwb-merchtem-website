
import * as React from "react";

const PageGridSection = ( {sectionTitle, children}) => {
  return (
    <div class="mainpage-content">
          <h2 class="heading-78">{sectionTitle}</h2>
          <div class="grid-container">
              {children}
              </div>
    </div>
  )
};

export default PageGridSection;