import * as React from 'react'
import Layout from '../../components/cards/layout'
import Seo from '../../components/seo'
import FullWidthContainer from '../../components/fullwidth-container'
import ActiviteitenMaandCardView from '../../components/activiteiten-maand-card-view'

const IndexPage = () => {
  return (
    <Layout showLogo="1" pageTitle="Activiteiten.">
      <FullWidthContainer>
      <ActiviteitenMaandCardView toonEnkelDezeMaand={true} toonHeelDitWerkjaar={false} />
      </FullWidthContainer>
    </Layout>
  )
}

export const Head = () => <Seo title="Activiteiten" />

export default IndexPage