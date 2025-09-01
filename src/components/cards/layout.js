import * as React from 'react'
import FooterWithLogo from '../footer-with-logo'

import hoofdLogo from "../../images/KWB_Raak_rood_geel.png";

import TopNavbar from '../TopNavBar';
import { Typography } from '@material-tailwind/react';

const Layout = ({ pageTitle, showLogo=false, children }) => {
  return (
    <main >
      <TopNavbar />
      <div className="w-full bg-gray-200 py-6 flex justify-center items-center">
        <figure>
      { showLogo && 
          <img src={hoofdLogo} alt="kwb Merchtem" className="h-24 w-auto" />
        }
      <Typography variant="lead">{pageTitle}</Typography>
      </figure>
      </div> 
      {children}
      <FooterWithLogo />
    </main>
  )
}

/*

       <TopNavbar />
       */

export default Layout