import * as React from 'react'
import Layout from '../../components/cards/layout'
import Seo from '../../components/seo'
import ActiviteitenOverzicht from '../../components/activiteitenoverzicht'
import ActiviteitenCardView from '../../components/activiteiten-card-view'
import { HorizontalCard } from '../../components/cards/horizontal-card'
import FullWidthContainer from '../../components/fullwidth-container'
import ActiviteitenMaandCardView from '../../components/activiteiten-maand-card-view'

const IndexPage = () => {
  return (
    <Layout showLogo="1" pageTitle="Activiteiten.">
      <ActiviteitenOverzicht />
      
      <FullWidthContainer>
        <ActiviteitenMaandCardView toonEnkelDezeMaand={true} />
      </FullWidthContainer>

      <FullWidthContainer>
      <HorizontalCard 
                cardHeaderTitle="Kalender 2025-2026"
                contentTitle="Volledige kalender om te downloaden"
                imgUrl="/media/kalender/2025-kalender-maand-per-maand.jpg"
                linkUrl="/media/kalender/2025-kalender-maand-per-maand.pdf"
                linkText={"Download" }  
                className="h-50"
              /> 
              <HorizontalCard 
                cardHeaderTitle="Online Kalender"
                contentTitle="Abonneer op onze online kalender"
                imgUrl="/media/kalender/digitale-kalender-icon.png"
                linkUrl="https://outlook.office365.com/owa/calendar/5e9a448f82ee4500ad657dc4a5ac25dd@kwbmerchtem.be/b413005362a74f2eae86a97f9922d00c5521457340468517363/calendar.ics"
                linkText={"Abonneer" }  
                className="h-50"
              >
                <p>Je kan onze kalender ook toevoegen aan je eigen digitale kalender (Google Calendar, Outlook, Apple Calendar, ...).</p>
                <p>Zo ben je steeds op de hoogte van onze activiteiten.</p>
                </HorizontalCard>
              </FullWidthContainer>
      <ActiviteitenCardView />
    </Layout>
  )
}

export const Head = () => <Seo title="Activiteiten" />

export default IndexPage