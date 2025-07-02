import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import OverPaginaComponent from '../components/page-components/over-pagina-component'


const OverPage = () => {
  return (
    <Layout showLogo="1" pageTitle="Wat is KWB Merchtem?">
      <OverPaginaComponent />
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

export default OverPage