import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import ListCol2Item from '../../components/list-col-2-item'
import PageListSection from '../../components/pagelistsection'
import KomendeActiviteiten from "../../components/komende-activiteiten";
import VoorbijeActiviteiten from "../../components/voorbije-activiteiten";


const IndexPage = () => {
  return (
    <Layout pageTitle="Activiteiten.">
      <PageListSection sectionTitle={"Laatste updates"}>
      <ListCol2Item section="/activiteiten" >
        <KomendeActiviteiten />
      </ListCol2Item>
      <ListCol2Item section="/activiteiten" >
        <VoorbijeActiviteiten />
      </ListCol2Item>
    </PageListSection>
    </Layout>
  )
}

export const Head = () => <Seo title="Activiteiten" />

export default IndexPage