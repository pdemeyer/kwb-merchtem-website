
import * as React from "react";

const ListCol2Item = ( {section, children}) => {
  return (
        <div class="list-col-2">
            <a href={section} class="post-picture-item">
            {children}
               </a>
        </div>
  )
};

export default ListCol2Item;