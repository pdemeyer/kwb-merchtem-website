import React, { useState } from "react";
import {
  IconButton,
  Button,
  Typography,
  Collapse,
  Navbar,
  Input,
} from "@material-tailwind/react";
import {
  Archive,
  Menu,
  MultiplePages,
  ProfileCircle,
  Search,
  SelectFace3d,
  Xmark,
} from "iconoir-react";

//import logo from "../images/logo.svg";
import logo from "../images/KWB_Raak_simpel_rood.png";

/*
const LINKS = [
  {
    icon: MultiplePages,
    title: "Pages",
    href: "#",
  },
  {
    icon: ProfileCircle,
    title: "Account",
    href: "#",
  },
  {
    icon: SelectFace3d,
    title: "Blocks",
    href: "#",
  },
  {
    icon: Archive,
    title: "Docs",
    href: "#",
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <NavItem label="About Us" />
      <NavItem label="Pricing" />
      <NavItem label="Contact Us" />
    </ul>
  );
}

function NavItem({ label }) {
  return (
    <a href="#">
      <Typography as="li" color="blue-gray" className="p-1 font-medium">
        {label}
      </Typography>
    </a>
  );
}
  
*/

export function NavbarWithSearch() {
  const [open, setOpen] = React.useState(false);
  //const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5"
        >
          Material Tailwind
        </Typography>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton variant="text" color="white">
            <Menu className="h-4 w-4" />
          </IconButton>
          <IconButton variant="text" color="white">
            <Search className="h-4 w-4" />
          </IconButton>
        </div>
        <div className="relative flex w-full gap-2 md:w-max">
          <Input
            type="search"
            color="white"
            label="Type here..."
            className="pr-20"
            containerProps={{
              className: "min-w-[288px]",
            }}
          />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>
      </div>
    </Navbar>
  );
}


export default NavbarWithSearch;

/*
const NavbarWithSearch = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    
    <Navbar className="mx-auto w-full max-w-screen-xl">
    <div>TEST</div>

    
      <div className="flex items-center" style={{ bgcolor: "#333" }}>
        <Typography
          as="a"
          href="#"
          type="small"
          className="ml-2 mr-2 block py-1 font-semibold"
        >
          Material Tailwind
        </Typography>
        <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="ml-auto w-40">
          <Input size="sm" type="search" placeholder="Search here...">
            <Input.Icon>
              <Search className="h-full w-full" />
            </Input.Icon>
          </Input>
        </div>
        <IconButton
          size="sm"
          variant="ghost"
          onClick={() => setOpenNav(!openNav)}
          className="ml-1 grid lg:hidden"
        >
          {openNav ? (
            <Xmark className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
      
    </Navbar>
  );
}

*/


/*
const NavBar = ({ pageTitle, children }) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <nav
    className="navbar is-transparent"
    role="navigation"
    aria-label="main-navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="kwb Merchtem" style={{ width: "88px" }} />
        </Link>}
        <button
          className={`navbar-burger burger ${isActive && "is-active"}`}
          aria-expanded={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </button>
      </div>
      <ul
        id="navMenu"
        className={` navbar-start has-text-centered navbar-menu ${
          isActive && "is-active"
        }`}
      >

        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/activiteiten">
            Activiteiten
          </Link>
        </li>
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/kleine-raken">
            Kleine Raak
          </Link>
        </li>
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/bestuur">
            Bestuur
          </Link>
        </li>
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/kermis">
            Kermis
          </Link>
        </li>
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/corrida">
            Corrida
          </Link>
        </li>
        {
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/nieuws">
            Nieuws
          </Link>
        </li>
        }
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/over">
            Over kwb Merchtem
          </Link>
        </li>
        <li className="navbar-item" style={{ padding: "0px" }}>
          <Link className="navbar-item" to="/contact">
            Contact
          </Link>
        </li>

      </ul>
    </div>
  </nav>
  )
}


export default NavBar

*/