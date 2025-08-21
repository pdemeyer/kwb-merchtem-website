import * as React from 'react'

const FullWidthContainer = ( {title, date, html, children }) => {
  return (
    <div className="content-centerer">
        <div className="fullwidth-item">
            {children}
        </div>
    </div>
  );
};

export default FullWidthContainer;

