
import * as React from "react";

const PageListSection = ( {sectionTitle, children}) => {
  return (
    <div className="mainpage-content">
      <div className="main-container-div">
          <h2 className="heading-78">{sectionTitle}</h2>
          <div className="list-container">
              {children}
          </div>
    </div>
    </div>
  )
};

export default PageListSection;