import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';


const IndexPage = () => {
  return (
    <Layout pageTitle="Kleine raken. Het maandblad.">
          <div class="mainpage-content">
      <div class="max-width-block"> 
        <div class="main-container-div">
            
        <div class="post-text-box">
          <a href="/media/kr/2025/02/algklraak202502.pdf">
          <div class="post-text-box">
                        <img alt="kleine raak 202502" src="/media/kr/2025/02/kr-202502.jpg"  
                        class="kleine-raak-small-image"/>
                        </div>
                        </a>
                        <div >
                        Februari 2025 - nummer 
                        </div>
                     </div>
                     </div>
                     </div>
                     </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Activiteiten" />

export default IndexPage