import { StaticImage } from "gatsby-plugin-image";
import KomendeActiviteiten from "./komende-activiteiten";
import VoorbijeActiviteiten from "./voorbije-activiteiten";
import ListCol3Item from "./list-col-3-item";
import ListCol2Item from "./list-col-2-item";
import * as React from "react";

const LaatsteUpdates = () => {
  return (
    
    <div class="mainpage-content">
      <div class="max-width-block"> 
        <div class="main-container-div">
            <h2 class="heading-78">Laatste Updates</h2>

            <div class="list-container">
               <ListCol2Item section="/komende-activiteiten" >
                  <KomendeActiviteiten />
               </ListCol2Item>
               <ListCol2Item section="/voorbije-activiteiten" >
                  <VoorbijeActiviteiten />
               </ListCol2Item>

         </div>
         </div>

      </div>
    </div>
     
  );
};


{/*}
<div class="list-col-3">
<a href="/reviews/torme-desk" class="post-picture-item">
    <div class="post-text-box">
      <div class="small-caps-text-copy"><h3>Kleine raak</h3></div>
   </div>
   
<StaticImage
        alt="kleine raak 202501"
        src="../images/kr-202501.jpg"  class="kleine-raak-small-image"/>
</a>
</div>
*/}

export default LaatsteUpdates;
