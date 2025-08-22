import * as React from "react"
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";


import logo from "../images/KWB_Raak_simpel_rood.png";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "gatsby";
import { useState } from "react";

export default function TopNavbar() {
  const [openNav, setOpenNav] = useState(false);

  const navItems = [
    { label: "Activiteiten", path: "/activiteiten" },
    { label: "Kleine Raak", path: "/kleine-raken" },
    { label: "Bestuur", path: "/bestuur" },
    { label: "Kermis", path: "/kermis" },
    { label: "Corrida", path: "/corrida" },
    { label: "Nieuws", path: "/nieuws" },
    { label: "Over kwb Merchtem", path: "/over" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 shadow-md bg-white border-b border-gray-200">
      <div className="flex items-center justify-between">
        <Link to="/" title="Logo" className="text-xl font-bold text-red-600">
          <img src={logo} alt="kwb Merchtem" style={{ width: "88px" }} />
        </Link>
        <div className="hidden lg:flex gap-6">
          {navItems.map(({ label, path }) => (
            <Typography
              key={label}
              as={Link}
              to={path}
              className="text-gray-700 hover:text-red-600 transition-colors font-medium"
            >
              {label}
            </Typography>
          ))}
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" color="black" />
          ) : (
            <Bars3Icon className="h-6 w-6" color="black" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className={`${openNav ? 'block' : 'hidden'} flex flex-col gap-4 mt-4 lg:hidden p-4 rounded-lg`}>
          {navItems.map(({ label, path }) => (
            <Typography
              key={label}
              as={Link}
              to={path}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {label}
            </Typography>
          ))}
        </div>
      </Collapse>
    </Navbar>
  );
}
