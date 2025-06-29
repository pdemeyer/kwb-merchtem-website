import * as React from "react";
import PageListSection from "./pagelistsection";
import FullWidthContainer from "./fullwidth-container";
 
const ContactZoeker = () => {
  return (
    <PageListSection sectionTitle={"Ons contacteren?"}>
      <FullWidthContainer>
            <div class="list-container">
            <div class="list-col-2">
                <div class="post-picture-item">
                    <div class="post-text-box">
                      <div class="small-caps-text-copy"><h3 class="post-item-title">Lid worden van KWB Merchtem?</h3></div>
                      <div class="tile-heading-2 top-padding">
                      Wens je lid te worden van KWB Merchtem? Laat het ons weten via een mailtje naar
                      <br/>
Stuur een mail naar <a href="mailto:lid@kwbmerchtem.be">lid@kwbmerchtem.be</a> en ontvang onze nieuwsbrief.
                      </div>
                    </div>
                  </div>
            </div>
            <div class="list-col-2">
                <div class="post-picture-item">
                    <div class="post-text-box">
                      <div class="small-caps-text-copy"><h3 class="post-item-title">Familienieuws melden</h3></div>
                      <div class="tile-heading-2 top-padding">
                      <p>De familie van de KWB-er is al vele jaren een belangrijk gegeven binnen onze KWB. Een geboorte, huwelijk, overlijden, communie,... Wij willen er graag aandacht aan besteden.</p>
                      
                      <p>Jammer genoeg zijn we vaak niet op de hoogte van dit familienieuws. Je mag het ons steeds laten weten via familienieuws@kwbmerchtem.be. Meestal publiceren we dat familienieuws ook in ons ledenblad "de kleine raak". Indien je dat niet wenst, laat het ons dan ook weten.</p>

<h3>Nieuwsbrief bij een overlijden</h3>
Indien gewenst sturen we het overlijdensbericht van een overlden (familie)lid via mail ook door naar alle leden. Stuur het overlijdensbericht door via <a href="mailto:familienieuws@kwbmerchtem.be">familienieuws@kwbmerchtem.be</a>.  Gelieve duidelijk te vermelden indien je wel of niet wenst dat dit wordt doorgestuurd naar de leden.
                      </div>
                    </div>
                  </div>
            </div>
        </div>
      </FullWidthContainer>
    </PageListSection>
  );  
};

export default ContactZoeker;
