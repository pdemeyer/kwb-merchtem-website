import * as React from 'react'
import Layout from '../../components/cards/layout'
import Seo from '../../components/seo'
import LaatsteNieuwsOverzicht from '../../components/laatste-nieuws-list'
import FullWidthContainer from '../../components/fullwidth-container'
import PageListSection from '../../components/pagelistsection'

const IndexPage = () => {
  return (
    <Layout showLogo="1" pageTitle="Nieuws.">
      <FullWidthContainer>
      <PageListSection sectionTitle={"Laatste Nieuws."}>
        <LaatsteNieuwsOverzicht />
      </PageListSection>
      </FullWidthContainer>
    </Layout>
  )
}

export const Head = () => <Seo title="Nieuws" />

export default IndexPage