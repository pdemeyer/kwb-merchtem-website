import React from "react";
import { Link } from "gatsby";

//import logo from "../images/logo.svg";
import logo from "../images/KWB_Raak_simpel_rood.png";
import facebook from "../images/social/facebook.svg";
import instagram from "../images/social/instagram.svg";
import twitter from "../images/social/twitter.svg";
import vimeo from "../images/social/vimeo.svg";

const Footer = () => {

    return (
        <footer className="footer has-background-black has-text-white-ter">
          <div className="content has-text-centered">
            <img
              src={logo}
              alt="kwb Merchtem"
              style={{ width: "14em" }}
            />
          </div>
          <div className="content has-text-centered has-background-black has-text-white-ter">
            <div className="container has-background-black has-text-white-ter">
              <div style={{ maxWidth: "100vw" }} className="columns">
                <div className="column is-4">
                  <section className="menu">
                    <ul className="menu-list">
                      <li>
                        <Link to="/" className="navbar-item">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/about">
                          Over ons
                        </Link>
                      </li>
                      {/*
                      <li>
                        <Link className="navbar-item" to="/products">
                          Products
                        </Link>
                      </li>
      */}
                      <li>
                        <Link className="navbar-item" to="/bestuur">
                          Bestuur
                        </Link>
                      </li>
                      {/*
                      <li>
                        <Link className="navbar-item" to="/contact/examples">
                          Form Examples
                        </Link>
                      </li>
      */}
                      <li>
                        <a
                          className="navbar-item"
                          href="/admin/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Admin
                        </a>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4">
                  <section>
                    <ul className="menu-list">
                      <li>
                        <Link className="navbar-item" to="/blog">
                          Laatste nieuwtjes
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4 social">
                  <a title="facebook" href="https://www.facebook.com/kwbmerchtem">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  {/*
                  <a title="twitter" href="https://twitter.com">
                    <img
                      className="fas fa-lg"
                      src={twitter}
                      alt="Twitter"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  */}
                  <a title="instagram" href="https://instagram.com">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  {/*
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                      src={vimeo}
                      alt="Vimeo"
                      style={{ width: "1em", height: "1em" }}
                    />
                  </a>
                  */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
};

export default Footer;
