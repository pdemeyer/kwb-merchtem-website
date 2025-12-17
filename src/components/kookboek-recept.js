
import * as React from "react";
import { HorizontalCard } from "./cards/horizontal-card";
import { Link } from "gatsby";

const KookBoekRecept = ( {datum, title, kok, slug, foto, tags, html, excerpt, children}) => {
  
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
         <div>
          {tags.map(tag => (
            <div className="m-2 border border-gray-300 rounded-full px-4 py-1" key={tag}>
              <Link to={`/kookboek/tags/${tag}`}>{tag}</Link>
            </div>
          ))}
        </div>
         </div>
        </HorizontalCard>
  );
};

/*

          linkUrl={`/kookboek/${datum}-${title.toLowerCase().replaceAll(" ", "-")}`}
 {excerpt}
*/

export default KookBoekRecept;