import { Typography } from '@material-tailwind/react';
import * as React from 'react'


function renderFullWidthContainer({title, children}) {
  return (
    <div>
      {title && <div className="max-w-screen-xl mx-auto flex justify-center items-center">
                  <Typography variant="h6" className="mb-4 uppercase">{title}</Typography>
                </div> }
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-6 pt-6 max-w-screen-xl mx-auto">
            {children}
    </div>
    </div>
  )
}

function wrapWithFilledBackground(content) {
  return (
    <div className="w-full bg-gray-50 py-6 px-6">
      {content}
    </div>
  )
}

function wrapWithEmptyBackground(content) {
  return (
    <div className="w-full py-6 px-6">
      {content}
    </div>
  )
}

const FullWidthContainer = ( {title, date, html, isBgFilled, children }) => {
  const content = renderFullWidthContainer({title, children});
  if (isBgFilled) {
    return wrapWithFilledBackground(content);
  } else
  return wrapWithEmptyBackground(content);
};

export default FullWidthContainer;

