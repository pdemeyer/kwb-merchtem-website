import * as React from 'react'
//import NavBar from "./NavBar";
import NavbarWithSearch from './navbar-with-search'
import FooterWithLogo from './footer-with-logo'

//import "../style/mystyles.sass"

import hoofdLogo from "../images/KWB_Raak_rood_geel.png";


const Layout = ({ pageTitle, showLogo=false, children }) => {

  return (
    <div >
       <NavbarWithSearch></NavbarWithSearch>
       <main className="pages-wrapper">
        { showLogo && 
        <div className="content-centerer">
          <img src={hoofdLogo} alt="kwb Merchtem" style={{ height: "100px" }}  />
        </div> 
        }
        <h1>{pageTitle}</h1>
        {children}
      </main>
      <FooterWithLogo></FooterWithLogo>
    </div>
  )
}

export default Layout