import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import ActiviteitenOverzicht from '../../components/activiteitenoverzicht'

const IndexPage = () => {
  return (
    <Layout showLogo="1" pageTitle="Activiteiten.">
      <ActiviteitenOverzicht />
    </Layout>
  )
}

export const Head = () => <Seo title="Activiteiten" />

export default IndexPage