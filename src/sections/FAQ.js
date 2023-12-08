import React from "react";
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
// import "../utils/iconfonts.css"
import Box from "../components/elements/Box";
import data from "../data/faq.json";
import FaqItem from "../components/FaqItem";
import Image from "../components/elements/Image";

const FAQ = () => {
  return (
    <>
      <section id="contact" className="dtr-section dtr-py-100">
        <Box className="container">
          <h3 className="color-blue dtr-mb-40">Frequently asked questions</h3>
          <Box className="row">
            <Box className="col-12 col-md-6">
              {data.faq1.map((item) => (
                <FaqItem
                  key={item.key}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </Box>

            <Box className="col-12 col-md-6">
              {data.faq2.map((item) => (
                <FaqItem
                  key={item.key}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </Box>
          </Box>

          <Box className="dtr-cta-box dtr-rounded-corner-xl dtr-shadow dtr-mt-50 bg-white">
            <Box className="row d-flex">
              <Box className="col-12 col-md-5 align-self-end">
                <Image src={data.cardImage} alt="cardImage" />
              </Box>
              <Box className="col-12 col-md-7 text-center dtr-py-50 dtr-px-60">
                <h3 className="color-blue">Get started with CoWallet</h3>
                <p className="text-size-md">
                  Ready to Transform Your Construction Management? Explore
                  Contractor Wallet Today!
                </p>
                <a
                  href="https://wa.me/917907707474"
                  target="_blank"
                  rel="noreferrer"
                  className="dtr-btn btn-blue dtr-mt-20"
                >
                  Book a demo
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default FAQ;
