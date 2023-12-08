import React from "react";
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
// import "../utils/iconfonts.css"
import Box from "./elements/Box";

const Testimonial = ({ client, company, review }) => {
  return (
    <>
      <Box className="dtr-testimonial dtr-rounded-corner-xl bg-white">
        <Box className="dtr-testimonial-content">{review}</Box>
        <Box className="dtr-client-info">
          <Box className="dtr-testimonial-user-info">
            <h6 className="dtr-client-name">{client}</h6>
            <span className="dtr-client-job">{company}</span>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Testimonial;
