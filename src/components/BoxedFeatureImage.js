import React from "react";
import Box from "./elements/Box";
import Image from "./elements/Image";
import Text from "./elements/Text";
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
// import "../utils/iconfonts.css"

const BoxedFeatureImage = ({ image, alt, text }) => {
  return (
    <>
      <Box className="col-12 col-md">
        <Box className="dtr-feature dtr-feature-top feature-has-box feature-has-shadow dtr-rounded-corner-xl text-center bg-white">
          <Box className="dtr-feature-img">
            <Image src={image} alt={alt} />
          </Box>
          <Box className="dtr-feature-content">
            <Text>{text}</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BoxedFeatureImage;
