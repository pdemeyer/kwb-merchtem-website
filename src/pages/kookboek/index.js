import * as React from 'react'
import Layout from '../../components/cards/layout'
import Seo from '../../components/seo'
import KookBoekPaginaComponent from '../../components/page-components/kookboek-pagina-component'
import KookBoekTagCloudComponent from '../../components/page-components/kookboek-tagcloud-component'
import KookBoekKokCloudComponent from '../../components/page-components/kookboek-kokcloud-component'

const KookboekPage = () => {
  return (
    <Layout showLogo={true} pageTitle="Kookboek. De bijbel voor de kwb-man.">
      <KookBoekTagCloudComponent />
      <KookBoekKokCloudComponent />
      <KookBoekPaginaComponent />
    </Layout>
  )
}

export const Head = () => <Seo title="Kookboek" />

export default KookboekPage
