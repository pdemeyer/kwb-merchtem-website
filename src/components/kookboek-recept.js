
import * as React from "react";
import { HorizontalCard } from "./cards/horizontal-card";

const KookBoekRecept = ( {datum, title, kok, slug, foto, html, excerpt, children}) => {
  
                  console.log("Foto in KookBoekRecept:", foto)

  return (
    <HorizontalCard 
          cardHeaderTitle={`${title}`}
          className="h-80"
          image={foto}
          linkUrl={`/kookboek/${slug}`}
          linkText="Meer"
        >
          <div>
         <p>{datum}</p>
         <p><i>{kok}</i></p>
         </div>
        </HorizontalCard>
  );
};

/*

          linkUrl={`/kookboek/${datum}-${title.toLowerCase().replaceAll(" ", "-")}`}
 {excerpt}
*/

export default KookBoekRecept;