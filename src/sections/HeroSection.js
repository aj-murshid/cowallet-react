import React from "react";
import data from '../data/hero.json'
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
// import "../utils/iconfonts.css"

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="dtr-section dtr-section-with-bg"
        style={{ backgroundImage: `url(${data.images.background})` }}
      >
        <div className="dtr-overlay dtr-overlay-blue"></div>
        <div className="container dtr-overlay-content hero-section-top-padding">
          <div className="row d-flex align-items-center dtr-pt-100 dtr-pb-50">
            <div className="col-12 col-md-6">
              <h1 className="color-white">
                Empower Your Contractor Journey With Our Cutting-Edge App
              </h1>
              <p className="text-size-md dtr-mt-30 color-white">
                Specifically designed for government contractors, our app
                enables you to effortlessly manage government contracts.
              </p>
              <p>
                <a
                  href="tel:+917907707474"
                  className="dtr-btn btn-white dtr-scroll-link dtr-px-50 dtr-mt-20 dtr-mr-10"
                >
                  Get Started
                </a>
                <a
                  href="https://wa.me/917907707474"
                  target="_blank"
                  rel="noreferrer"
                  className="dtr-btn dtr-px-50 dtr-mt-20"
                >
                  Request a demo
                </a>
              </p>
            </div>

            <div className="col-12 col-md-6">
              <img
                src={data.images.dashboard}
                alt="dashboard"
                className="dtr-mb-minus50 animated-img"
              />
            </div>
          </div>
        </div>
        <div
          className="dtr-section-with-bg hero-svg-bg-absolute"
          style={{
            backgroundImage: `url(${data.images.svg})`,
            width: "100%",
            height: "200px",
          }}
        ></div>
      </section>
    </>
  );
};

export default HeroSection;
