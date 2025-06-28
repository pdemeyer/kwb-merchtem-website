
import FullWidthContainer from "./fullwidth-container";
import ListCol3Item from "./list-col-3-item";
import * as React from "react";

const Activiteit = ( {title, date, html }) => {
  return (

    <FullWidthContainer>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </FullWidthContainer>
  );
};

export default Activiteit;



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