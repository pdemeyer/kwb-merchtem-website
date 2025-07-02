import * as React from 'react'

const FullWidthContainer = ( {title, date, html, children }) => {
  return (
    <div class="content-centerer">
        <div class="fullwidth-item">
            {children}
        </div>
    </div>
  );
};

export default FullWidthContainer;

