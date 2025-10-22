import { Typography } from '@material-tailwind/react';
import * as React from 'react'


function renderFullWidthContainer({title, maxNumCols, children}) {

   const classes = "grid grid-cols-1 gap-6 pb-6 pt-6 max-w-screen-xl mx-auto"
   if (maxNumCols ==2) {
    classes = "grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6 pt-6 max-w-screen-xl mx-auto"
   }

  return (
    <div>
      {title && <div className="max-w-screen-xl mx-auto flex justify-center items-center">
                  <Typography variant="h6" className="mb-4 uppercase">{title}</Typography>
                </div> }
    <div className={classes}> {children} </div>
    </div>
  )
}

function wrapWithFilledBackground(content) {
  return (
    <div className="w-full bg-gray-50">
      {content}
    </div>
  )
}

function wrapWithEmptyBackground(content) {
  return (
    <div className="w-full bg-transparent">
      {content}
    </div>
  )
}

const FullWidthContainer = ( {title, date, html, isBgFilled, maxNumCols, children }) => {
  const content = renderFullWidthContainer({title, maxNumCols, children});
  if (isBgFilled) {
    return wrapWithFilledBackground(content);
  } else
  return wrapWithEmptyBackground(content);
};

export default FullWidthContainer;

