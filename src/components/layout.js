import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import NavBar from "./NavBar";
import Footer from './footer'

import "../style/mystyles.sass"

import useSiteMetadata from "./SiteMetadata";

import hoofdLogo from "../images/KWB_Raak_rood_geel.png";

import {
  heading,
} from './layout.module.css'


const Layout = ({ pageTitle, showLogo=false, children }) => {

  const { title, description } = useSiteMetadata();

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div class="body-v3">
       <NavBar/>
      <main className="pages-wrapper">
        { showLogo && 
        <div class="content-centerer">
          <img src={hoofdLogo} alt="kwb Merchtem" style={{ height: "100px" }}  />
        </div> 
        }
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout