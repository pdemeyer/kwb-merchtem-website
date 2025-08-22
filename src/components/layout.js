import * as React from 'react'
import NavbarWithSearch from './navbar-with-search'
import FooterWithLogo from './footer-with-logo'

import hoofdLogo from "../images/KWB_Raak_rood_geel.png";
import TopNavbar from './TopNavBar';
import { Typography } from '@material-tailwind/react';


const Layout = ({ pageTitle, showLogo=false, children }) => {

  return (
    <main className="pages-wrapper">
       <TopNavbar></TopNavbar>
    
      <div className="w-full bg-gradient-to-b from-blue-600 to-gray-200 py-12 flex justify-center items-center">
        <figure>
      { showLogo && 
          <img src={hoofdLogo} alt="kwb Merchtem" className="h-24 w-auto" />
        }
      <Typography variant="h1" color="white" >{pageTitle}</Typography>
      </figure>
      </div> 
      {children}
      <FooterWithLogo></FooterWithLogo>
    </main>
  )
}

export default Layout