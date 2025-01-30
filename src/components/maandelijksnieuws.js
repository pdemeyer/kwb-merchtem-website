import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const MaandelijksNieuws = () => {
  return (
   <div class="mainpage-content">
   <div class="max-width-block"> 
     <div class="main-container-div">
      <h2 class="heading-78">Maandelijks Nieuws</h2>
      <div class="list-container">
      <div class="list-col-2">
                <a href="/reviews/homebase-foundation" class="post-picture-item">
                    <div class="post-text-box">
                      <div class="small-caps-text-copy">
                        <h3 class="post-item-title">Ons maandblad: de Kleine Raak</h3>
                       </div>
                       <div class="tile-heading-2 top-padding"> </div>
                      </div>
                     <div class="post-picture-picture">
                        <StaticImage alt="kleine raak 202501" src="../images/kr-202501.jpg"  class="kleine-raak-small-image"/>
                     </div>
                  </a>
            </div>
            <div class="list-col-2">
                <a href="/reviews/homebase-foundation" class="post-picture-item">
                <div class="post-text-box">
                      <div class="small-caps-text-copy">
                        <h3 class="post-item-title">Volledige kalender om te downloaden</h3>
                       </div>
                       <div class="tile-heading-2 top-padding"> </div>
                      </div>
                     <div class="post-picture-picture">
                        <StaticImage alt="kalender 2024-2025" src="../images/kalender-maand-per-maand.jpg"  class="kleine-raak-small-image"/>
                     </div>
                  </a>
            </div>
            
         </div>
      </div>
   </div>
</div>
     
  );
};

export default MaandelijksNieuws;
