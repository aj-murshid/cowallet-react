import React from "react";
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
// import "../utils/iconfonts.css"
import Box from "./elements/Box";

const FaqItem = ({ question, answer }) => {
  return (
    <>
      <Box className="faq-item">
        <h4 className="faq-heading">{question}</h4>
        <Box className="faq-content">{answer}</Box>
      </Box>
    </>
  );
};

export default FaqItem;
