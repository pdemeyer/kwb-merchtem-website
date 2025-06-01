
import * as React from "react";

const ListCol3Item = ( {section, children}) => {
  return (
        <div class="list-col-3">
            <a href={section} class="post-picture-item-old">
              {children}
               </a>
        </div>
  )
};

export default ListCol3Item;