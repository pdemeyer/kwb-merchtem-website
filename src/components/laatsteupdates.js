import { StaticImage } from "gatsby-plugin-image";
import KomendeActiviteiten from "./komende-activiteiten";
import ListCol3Item from "./list-col-3-item";
import * as React from "react";

const LaatsteUpdates = () => {
  return (
    
    <div class="mainpage-content">
      <div class="max-width-block"> 
        <div class="main-container-div">
            <h1 class="heading-78">Laatste Updates</h1>

            <div class="list-container">
               <ListCol3Item section="/komende-activiteiten" >
                  <KomendeActiviteiten />
            </ListCol3Item>
            <div class="list-col-3">
               <a href="/reviews/field-dining-table" class="post-picture-item">
                  <div class="post-text-box">
                     <div class="small-caps-text-copy"><h3>Voorbije activiteiten</h3></div>
                     <div class="tile-heading-2 top-padding">
                        <ul>
                            <li>iets</li>
                            <li> en nog iets</li>
                        </ul></div>
                  </div>
               </a>
            </div>
            <div class="list-col-3">
               <a href="/reviews/field-dining-table" class="post-picture-item">
                  <div class="post-text-box">
                     <div class="small-caps-text-copy"><h3>Laatste nieuwtjes</h3></div>
                     <div class="tile-heading-2 top-padding">
                        <ul>
                            <li>iets</li>
                            <li> en nog iets</li>
                        </ul></div>
                  </div>
               </a>
            </div>
            
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
