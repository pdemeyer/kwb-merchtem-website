
import * as React from "react";
import { HorizontalCard } from "./cards/horizontal-card";


function nummerNaarMaand(nummer) {
  const maanden = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
  return maanden[nummer - 1] || "onbekende maand";
}

const KleineRaak = ( {jaar, maand, volgnummer, html, excerpt, children}) => {
  
    const maandNaam = nummerNaarMaand(maand);
  return (
    <HorizontalCard 
          cardHeaderTitle={`Kleine Raak ${maandNaam} ${jaar}`}
          imgUrl={`/media/kr/${jaar}/${maand}/kr-${jaar}${maand}.png`}
          linkUrl={`/media/kr/${jaar}/${maand}/algklraak${jaar}${maand}.pdf`}
          linkText={"Download" }
          className="h-80"
        >
          {excerpt}
        </HorizontalCard>
  );
};

export default KleineRaak;



/*

<ListCol3Item section="/kleine-raken" >
      <a href={`/media/kr/${jaar}/${maand}/algklraak${jaar}${maand}.pdf`}>
       <div class="post-picture-picture-old">
          <img alt={`kleine raak ${jaar}${maand}`} src={`/media/kr/${jaar}/${maand}/kr-${jaar}${maand}.png`}  
            class="kleine-raak-small-image-old"/>
        </div>
      </a>
      {maand} {jaar} - nummer {volgnummer}
      <p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </p>
      
    </ListCol3Item>
    
    */