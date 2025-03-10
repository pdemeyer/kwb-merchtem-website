import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BestuurPage = () => {
  return (
    <Layout showLogo="1" pageTitle="Het bestuur van kwb Merchtem">
      <div class="content-centerer">
        <div class="fullwidth-item">
      <p>Elke maand komt het (dagelijks) bestuur samen. Deze bestuursleden zorgen samen met leden of 
        wijkmeesters voor: het uitwerken van activiteiten, het bekijken van de financiele situatie,  
        het voorbereiden van de wijkmeestersvergadering, het bespreken van werkgroepen, 
        de publiciteit, enz...
      </p>
      <p>Het bestuur wordt om de 2 jaar verkozen. Nadien wordt één van de bestuursleden 
        verkozen tot voorzitter door de leden. Een voorzitter mag maximaal 4 jaar na elkaar 
        voorzitter zijn van KWB Merchtem.
        </p>
        <p>Contact opnemen kan met onze voorzitter Frans: 
          <a href="mailto:voorzitter@kwbmerchtem.be">voorzitter@kwbmerchtem.be</a></p>

        <p>
          
        </p>
        </div>
        </div>
    </Layout>
  )
}

export const Head = () => <Seo title="kwb Bestuur" />

export default BestuurPage