import React from "react";
import { Link } from "gatsby";
import { Typography, Button } from "@material-tailwind/react";


//import logo from "../images/logo.svg";
import logo from "../images/KWB_Raak_simpel_rood.png";
import facebook from "../images/social/facebook.svg";
import instagram from "../images/social/instagram.svg";

const FooterWithLogo = () => {

    return (
        <footer className='w-full footer py-12 pt-24  px-8'>
           <div className='flex flex-col justify-between items-center border-b-[1px] md:px-12 pb-8 border-b-purple-200 mb-8'>
               <Typography className='font-poppins text-2xl font-semibold text-white mb-8'>
                   Do you want to know more or just have any questions? write to us.
               </Typography>
               <Button size='lg' color='red' className='text-white'>
                   Contact Us
               </Button>
           </div>
           <div className='w-full flex items-center flex-col justify-center'>
               <Typography className='font-poppins text-lg font-semibold text-purple-100'>
                   Meetup
               </Typography>
           </div>
       </footer>
      );
};

export default FooterWithLogo;
