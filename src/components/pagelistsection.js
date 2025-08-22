
import { Typography } from "@material-tailwind/react";
import * as React from "react";

const PageListSection = ( {sectionTitle, children}) => {
  return (
    <div >
          <Typography variant="h1">{sectionTitle}</Typography>
              {children}
    </div>
  )
};

export default PageListSection;