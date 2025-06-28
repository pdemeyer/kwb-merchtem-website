
import * as React from "react";

const ListCol2Item = ( {section, children}) => {
  return (
        <div class="list-col-2 post-picture-item">
            {children}
        </div>
  )
};


/*
<a href={section} class="post-picture-item">
            {children}
               </a>
*/

export default ListCol2Item;