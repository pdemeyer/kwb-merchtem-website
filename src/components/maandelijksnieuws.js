import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PageListSection from "./page-section";

const MaandelijksNieuws = () => {
  return (
   <PageListSection sectionTitle={"Maandelijks Nieuws"}>
      <div class="list-col-2">
                <a href="/kleine-raken" class="post-picture-item">
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
   </PageListSection>
     
  );
};

export default MaandelijksNieuws;
