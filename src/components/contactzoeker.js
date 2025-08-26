import * as React from "react";
import { Typography } from "@material-tailwind/react";
import SplitImageSection from "./cards/split-image-section";
 
const ContactZoeker = () => {
  return (
        <SplitImageSection 
          titleRight={"Familienieuws melden"}
          contentLeft={
            <section>
                <Typography variant="h5" className="mb-4 uppercase">
                  Lid worden van KWB Merchtem?
                </Typography>
                <Typography >
                  Wens je lid te worden van KWB Merchtem? Laat het ons weten via een mailtje. 
                  Stuur een mail naar <a href="mailto:lid@kwbmerchtem.be" as="a">lid@kwbmerchtem.be</a> en ontvang onze nieuwsbrief.
                </Typography>
              </section>
          }
          contentRight={<section>
                <Typography variant="h5" color="gray" className="mb-4 uppercase">
                  Familienieuws melden
                </Typography>
            <Typography>
          De familie van de KWB-er is al vele jaren een belangrijk gegeven binnen onze KWB. Een geboorte, huwelijk, overlijden, communie,... Wij willen er graag aandacht aan besteden.
        Jammer genoeg zijn we vaak niet op de hoogte van dit familienieuws. Je mag het ons steeds laten weten via <a href="mailto:familienieuws@kwbmerchtem.be">familienieuws@kwbmerchtem.be</a >.  
        Meestal publiceren we dat familienieuws ook in ons ledenblad "de kleine raak". Indien je dat niet wenst, laat het ons dan ook weten.
            </Typography>
            </section>
          }
          imageUrl={"/images/kermis-kassa.jpg"} />

/*
      <FullWidthContainer title={"Ons contacteren?"}>
      </FullWidthContainer>
      */
  );  
};


/*

        <HorizontalCard contentTitle={"Lid worden van KWB Merchtem?"} linkText="Lees meer" linkUrl="#" >
          <Typography variant="h6" color="gray">
            Wens je lid te worden van KWB Merchtem? Laat het ons weten via een mailtje. 
            Stuur een mail naar <Link to='mailto:lid@kwbmerchtem.be'>lid@kwbmerchtem.be</Link> en ontvang onze nieuwsbrief.
            </Typography>
        </HorizontalCard>
        
        <HorizontalCard contentTitle={"Familienieuws melden"} linkText="Lees meer" linkUrl="#">
          <Typography variant="h6" color="gray">
          De familie van de KWB-er is al vele jaren een belangrijk gegeven binnen onze KWB. Een geboorte, huwelijk, overlijden, communie,... Wij willen er graag aandacht aan besteden.
        Jammer genoeg zijn we vaak niet op de hoogte van dit familienieuws. Je mag het ons steeds laten weten via <Link to="mailto:  familienieuws@kwbmerchtem.be">Deze link</Link> 
        Meestal publiceren we dat familienieuws ook in ons ledenblad "de kleine raak". Indien je dat niet wenst, laat het ons dan ook weten.
            </Typography>
        </HorizontalCard>
        */

export default ContactZoeker;
