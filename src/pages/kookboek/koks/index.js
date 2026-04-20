import React from "react";
import { graphql, Link } from "gatsby";
import KookBoekKokCloudComponent from "../../../components/page-components/kookboek-kokcloud-component";
import Layout from "../../../components/cards/layout";
import Seo from "../../../components/seo";


const TagsPage = () => {
  return (
    <Layout showLogo={true} pageTitle="Kookboek. De bijbel voor de kwb-man.">
      <KookBoekKokCloudComponent />
    </Layout>
  )
}

export const Head = () => <Seo title="Kookboek" />

export default TagsPage
