import React from "react";
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
// import "../utils/iconfonts.css"
import Box from "./elements/Box";
import Image from "./elements/Image";
import data from "../data/logos.json";

const LogoSlider = () => {
  return (
    <>
      <section className="dtr-section dtr-md-mx-20 dtr-border-bottom border-grey dtr-py-50">
        <Box className="row">
          <Box className="col-12">
            <Box className="dtr-slick-slider dtr-logo-carousel">
              {data.logos.map((item) => (
                <Box key={item.key}>
                  <Image src={item.image} alt={item.alt} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default LogoSlider;
