import * as React from 'react'
import FooterWithLogo from '../footer-with-logo'

import hoofdLogo from "../../images/KWB_Raak_rood_geel.png";

import TopNavbar from '../TopNavBar';
import { Typography } from '@material-tailwind/react';

import "../../themes/default-theme.css"; // standaard
import "../../themes/mvdn-theme.css"; // mysterie van de nacht

const Layout = ({ pageTitle, showLogo=false, children, themeName="default" }) => {

  return (
    <div className={`${themeName}-theme bg-theme-gradient text-theme-text min-h-screen`}>
    <main >
      <TopNavbar />
      <div className="w-full bg-theme-header-bg text-theme-header-text py-6 flex justify-center items-center">
        <figure>
          { showLogo && 
            <img src={hoofdLogo} alt="kwb Merchtem" className="h-24 w-auto" />
          }
          <Typography variant="lead" className="text-theme-header-text">{pageTitle}</Typography>
        </figure>
      </div> 
      {children}
      <FooterWithLogo />
    </main>
    </div>
  )
}

export default Layout