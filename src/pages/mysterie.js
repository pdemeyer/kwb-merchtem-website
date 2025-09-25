import * as React from 'react'
import Layout from '../components/cards/layout'
import Seo from '../components/seo'
import MysteriePaginaComponent from '../components/page-components/mysterie-pagina-component';

const MvdnPage = () => {
  return (
    <Layout pageTitle="Mysterie van de Nacht." showLogo="1" themeName="mvdn">
        <MysteriePaginaComponent />
    </Layout>
  )
}

export const Head = () => <Seo title="kwb Bestuur" />

export default MvdnPage

