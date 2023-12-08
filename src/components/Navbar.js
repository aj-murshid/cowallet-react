import React from "react";
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
// import "../utils/iconfonts.css"
import Image from "./elements/Image";
import List from "./elements/List";
import Item from "./elements/Item";
import data from "../data/navbar.json";

const Navbar = () => {
  return (
    <div>
      {/* Small Devices Header */}

      <div className="dtr-responsive-header fixed-top">
        <div className="container">
          {/* small devices logo  */}
          <a href="index.html">
            <Image src={data.logo} alt={"logo"} style={{ width: "200px" }} />
          </a>
          {/* small devices logo ends  */}

          {/* menu button  */}
          <button id="dtr-menu-button" className="dtr-hamburger" type="button">
            <span className="dtr-hamburger-lines-wrapper">
              <span className="dtr-hamburger-lines"></span>
            </span>
          </button>
        </div>
        <div className="dtr-responsive-header-menu"></div>
      </div>
      {/* Small Devices Header ends */}

      {/* Header  */}
      <header id="dtr-header-global" className="fixed-top bg-white">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            {/* header left starts  */}
            <div className="dtr-header-left">
              {/* logo  */}
              <a className="logo-default dtr-scroll-link" href="#home">
                <Image
                  src={data.logo}
                  alt={"logo"}
                  style={{ width: "200px" }}
                />
              </a>

              {/* logo on scroll  */}
              <a className="logo-alt dtr-scroll-link" href="#home">
                <Image
                  src={data.logo}
                  alt={"logo"}
                  style={{ width: "200px" }}
                />
              </a>
              {/* logo on scroll ends  */}
            </div>
            {/* header left ends  */}

            {/* menu starts */}
            <div className="main-navigation navbar navbar-expand-lg ml-auto">
              <List
                className={
                  "dtr-scrollspy navbar-nav dtr-nav dark-nav-on-load dark-nav-on-scroll"
                }
              >
                {data.links.map((item) => (
                  <Item key={item.key} className={"nav-item"}>
                    {/* <Anchor className={"nav-link active"} href={"home"}>
                    Home
                  </Anchor> */}
                    <a className="nav-link" href={item.link}>
                      {item.name}
                    </a>
                  </Item>
                ))}
              </List>
            </div>
            {/* menu ends */}

            {/* header right starts  */}
            <div className="dtr-header-right">
              <a
                href="/login"
                className="dtr-btn btn-blue dtr-scroll-link dtr-px-50"
                style={{ borderRadius: "10px" }}
              >
                Login
              </a>
            </div>
            {/* header right ends  */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
