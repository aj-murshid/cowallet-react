import React from "react";
import data from "../data/boxedFeature.json";
import Box from "../components/elements/Box";
import BoxedFeatureImage from "../components/BoxedFeatureImage";
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
// import "../utils/iconfonts.css"

const BoxedFeature = () => {
  return (
    <>
      <section
        className="dtr-section dtr-pt-100 dtr-pb-70 dtr-section-with-bg bg-light-blue parallax"
        style={{ backgroundImage: `url(${data.background})` }}
      >
        <Box className="container">
          <Box className="row dtr-mb-50">
            <Box className="col-12 text-center">
              <h2>Why CoWallet</h2>
              <Box className="dtr-styled-divider divider-center bg-light-violet"></Box>
            </Box>
          </Box>
          <Box className="row">
            {data.features.map((item) => (
              <BoxedFeatureImage
                key={item.key}
                image={item.image}
                alt={item.alt}
                text={item.text}
              />
            ))}
          </Box>
        </Box>
      </section>
    </>
  );
};

export default BoxedFeature;
