import React from "react";
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
// import "../utils/iconfonts.css"
import data from "../data/moreFeatures.json";
import Box from "../components/elements/Box";
import Image from "../components/elements/Image";
import Text from "../components/elements/Text";

const MoreFeatures = () => {
  return (
    <Box>
      <section
        className="dtr-section dtr-py-100 bg-light-blue parallax"
        style={{ backgroundImage: `url(${data.background})` }}
      >
        <Box className="row dtr-mb-50">
          <Box className="col-12 text-center">
            <h2>Explore More Features</h2>
            <Box className="dtr-styled-divider divider-center bg-light-violet"></Box>
          </Box>
        </Box>

        <Box className="dtr-slick-slider dtr-feature-style1 dtr-feature-boxed">
          {data.moreFeatures.map((item) => (
            <Box
              key={item.key}
              className="dtr-feature dtr-rounded-corner-xl bg-white"
            >
              <Box className="dtr-team team-has-shadow text-center bg-white">
                <Box className="dtr-team-img">
                  <Image src={item.image} alt={item.alt} />
                </Box>
                <Box className="dtr-team-content">
                  <Text>{item.text}</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </section>
    </Box>
  );
};

export default MoreFeatures;
