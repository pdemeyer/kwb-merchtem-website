import * as React from 'react'
import Layout from '../../components/cards/layout'
import Seo from '../../components/seo'
import KermisCorridaHeader from '../../components/kermis-corrida-header';
import CorridaUitslagenPaginaComponent from '../../components/page-components/corrida-uitslagen-pagina-component';

const UitslagenPage = () => {
  return (
    <Layout pageTitle="Corrida KWB Merchtem.">
      <KermisCorridaHeader />
      <CorridaUitslagenPaginaComponent />
    </Layout>
  )
}

export const Head = () => <Seo title="Kermis & Corrida" />

export default UitslagenPage