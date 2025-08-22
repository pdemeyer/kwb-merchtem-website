import { Typography } from '@material-tailwind/react';
import * as React from 'react'

const FullWidthContainer = ( {title, date, html, children }) => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto flex justify-center items-center">
        <Typography variant="h6" color="gray" className="mb-4 uppercase">{title}</Typography>
      </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-6 pt-6 max-w-screen-xl mx-auto">
            {children}
    </div>
    </div>
  );
};

export default FullWidthContainer;

