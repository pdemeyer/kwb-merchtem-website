import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'


const IndexPage = () => {
  return (
    <Layout pageTitle="Kleine raak. Het maandblad.">
          <div class="mainpage-content">
      <div class="max-width-block"> 
        <div class="main-container-div">
            <div class="center-content">
        <div class="post-text-box">
          <a href="/media/kr/2025/05/algklraak202505.pdf">
          <div class="post-picture-picture">
                        <img alt="kleine raak 202505" src="/media/kr/2025/05/kr-202505.png"  
                        class="kleine-raak-small-image"/>
                        </div>
                        </a>
                        <div >
                        Mei 2025 - nummer 547
                        </div>
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