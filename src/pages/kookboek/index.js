import * as React from 'react'
import Layout from '../../components/cards/layout'
import Seo from '../../components/seo'
import KookBoekPaginaComponent from '../../components/page-components/kookboek-pagina-component'

const KookboekPage = () => {
  return (
    <Layout showLogo={true} pageTitle="Kookboek. De bijbel voor de kwb-man.">
      <KookBoekPaginaComponent />
    </Layout>
  )
}

export const Head = () => <Seo title="Kookboek" />

export default KookboekPage
