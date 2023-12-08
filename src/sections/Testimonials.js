import React from "react";
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
// import "../utils/iconfonts.css"
import data from "../data/testimonials.json";
import Box from "../components/elements/Box";
import Testimonial from "../components/Testimonial";

const Testimonials = () => {
  return (
    <>
      <section
        id="reviews"
        className="dtr-section dtr-md-mx-20 dtr-py-100 bg-violet"
      >
        <h3 className="text-center dtr-mb-50 color-white">
          Trusted by over 100+ customers
        </h3>

        <Box className="dtr-slick-slider dtr-testimonial-style1 dtr-testimonial-boxed">
          {data.testimonials.map((item) => (
            <Testimonial
              key={item.key}
              client={item.client}
              company={item.company}
              review={item.review}
            />
          ))}
          {/* <Box className="dtr-testimonial dtr-rounded-corner-xl bg-white">
            <Box className="dtr-testimonial-content">
              "Effortless collaboration and streamlined communication – Cowallet
              has significantly improved our project coordination."
            </Box>
            <Box className="dtr-client-info">
              <Box className="dtr-testimonial-user-info">
                <h6 className="dtr-client-name">Noushad</h6>
                <span className="dtr-client-job">
                  Thoombalakkadan Constructions
                </span>
              </Box>
            </Box>
          </Box>

          <Box className="dtr-testimonial dtr-rounded-corner-xl bg-white">
            <Box className="dtr-testimonial-content">
              “Cowallet transformed our construction projects with its seamless
              integration and efficiency. A game-changer in construction
              management”
            </Box>
            <Box className="dtr-client-info">
              <Box className="dtr-testimonial-user-info">
                <h6 className="dtr-client-name">Shameem</h6>
                <span className="dtr-client-job">Thonikkadavath Developers</span>
              </Box>
            </Box>
          </Box>

          <Box className="dtr-testimonial dtr-rounded-corner-xl bg-white">
            <Box className="dtr-testimonial-content">
              "Managing sites is a breeze with Cowallet. Accessing plans and
              reports on the go has made my job efficient and organized."
            </Box>
            <Box className="dtr-client-info">
              <Box className="dtr-testimonial-user-info">
                <h6 className="dtr-client-name">Munna</h6>
                <span className="dtr-client-job">Munna Construction</span>
              </Box>
            </Box>
          </Box>

          <Box className="dtr-testimonial dtr-rounded-corner-xl bg-white">
            <Box className="dtr-testimonial-content">
              "Cowallet simplified our estimation process, saving time and
              improving accuracy. A powerful tool for construction cost
              analysis."
            </Box>
            <Box className="dtr-client-info">
              <Box className="dtr-testimonial-user-info">
                <h6 className="dtr-client-name">Ajnas</h6>
                <span className="dtr-client-job">AJ Constructions</span>
              </Box>
            </Box>
          </Box> */}
        </Box>
      </section>
    </>
  );
};

export default Testimonials;
