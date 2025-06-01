
import ListCol3Item from "./list-col-3-item";
import * as React from "react";

const KleineRaak = ( {jaar, maand, volgnummer, html, excerpt, children}) => {
  return (
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
  );
};

export default KleineRaak;
