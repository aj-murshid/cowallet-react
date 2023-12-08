import React from "react";
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
// import "../utils/iconfonts.css"
import data from "../data/footer.json";
import Box from "../components/elements/Box";
import List from "../components/elements/List";
import Item from "../components/elements/Item";

const Footer = () => {
  return (
    <>
      <footer
        id="dtr-footer"
        className="dtr-section-with-bg"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
      >
        <Box className="container">
          <Box className="row">
            <Box className="col-12 col-sm-6 col-lg-4 dtr-mb-30">
              <h4 className="color-blue">Company</h4>
              <List className="dtr-list-simple">
                {data.company.map((item) => (
                  <Item key={item.key}>
                    <a href={item.href} className="dtr-styled-link">
                      {item.item}
                    </a>
                  </Item>
                ))}
              </List>
            </Box>

            <Box className="col-12 col-sm-6 col-lg-4 dtr-mb-30">
              <h4 className="color-blue">Contact Info</h4>
              <List className="dtr-list-simple">
                {data.contact.map((item) => (
                  <Item key={item.key}>
                    <a href={item.href}>{item.item}</a>
                  </Item>
                ))}
              </List>
            </Box>

            <Box className="col-12 col-sm-6 col-lg-4 dtr-mb-30">
              <h4 className="color-blue">Office Address</h4>
              <p>AJ Future Development LLP,</p>
              <p>Malappuram, Kerala</p>
              <Box className="dtr-social-large">
                <List className="dtr-social dtr-social-list color-white-muted-alt accent-color-hover text-center">
                  {data.socials.map((item) => (
                    <Item>
                      <a
                        href={item.href}
                        className={item.className}
                        target={item.target}
                        rel={item.rel}
                        title={item.title}
                      ></a>
                    </Item>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>

          <Box className="row">
            <Box className="col d-flex justify-content-center">
              &copy;
              <span id="copyright">{new Date().getFullYear()}</span>
              <span>{" - "}</span>
              <span>
                <a href="https://ajfuture.in/" target="_blank" rel="noreferrer">
                  AJ Future{" "}
                </a>
                Developement LLP
              </span>
            </Box>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
