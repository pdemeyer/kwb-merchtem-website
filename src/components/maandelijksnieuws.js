import * as React from "react";
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
                        <img alt="kleine raak 202504" src="/media/kr/2025/04/kr-202504.png"  
                        class="kleine-raak-small-image"/>
                     </div>
                  </a>
            </div>
            <div class="list-col-2">
                <a href="/media/kalender/kalender-maand-per-maand.pdf" class="post-picture-item">
                <div class="post-text-box">
                      <div class="small-caps-text-copy">
                        <h3 class="post-item-title">Volledige kalender om te downloaden</h3>
                       </div>
                       <div class="tile-heading-2 top-padding"> </div>
                      </div>
                     <div class="post-picture-picture">
                        <img alt="kalender 2024-2025" src="/media/kalender/kalender-maand-per-maand.jpg"  class="kleine-raak-small-image"/>
                     </div>
                  </a>
            </div>
   </PageListSection>
     
  );
};

export default MaandelijksNieuws;
