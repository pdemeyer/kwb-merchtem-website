import * as React from 'react'
import Layout from '../../components/cards/layout'
import Seo from '../../components/seo'
import ActiviteitenOverzicht from '../../components/activiteitenoverzicht'
import ActiviteitenCardView from '../../components/activiteiten-card-view'

const IndexPage = () => {
  return (
    <Layout showLogo="1" pageTitle="Activiteiten.">
      <ActiviteitenOverzicht />
      <ActiviteitenCardView />
    </Layout>
  )
}

export const Head = () => <Seo title="Activiteiten" />

export default IndexPage