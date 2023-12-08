import React from "react";
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
// import "../utils/iconfonts.css"
import Box from "../components/elements/Box";
import data from "../data/ourFeatures.json";
import Text from "../components/elements/Text";

const OurFeatures = () => {
  return (
    <>
      <section id="features" className="dtr-section app-features dtr-py-100">
        <Box className="container">
          <Box className="row dtr-mb-50">
            <Box className="col-12 text-center">
              <h2>Our Features</h2>
              <Box className="dtr-styled-divider divider-center bg-light-violet"></Box>
            </Box>
          </Box>
          <Box className="row">
            <Box className="col-md-12 col-lg-4 wow fadeInUp">
              <img
                className="img-fluid features-img"
                src={data.mobile}
                alt="App"
              />
            </Box>

            <Box className="col-md-6 col-lg-4 features-left">
              {data.leftContents.map((item) => (
                <Box className="col-sm-12 wow fadeInUp">
                  <Box className="icon">
                    <img src={item.image} alt="Icon" />
                  </Box>
                  <Box className="feature-single">
                    <h1>{item.title}</h1>
                    <Text>{item.text}</Text>
                  </Box>
                </Box>
              ))}
              {/* <Box className="col-sm-12 wow fadeInUp">
                <Box className="icon">
                  <img src="images/ft-worker.png" alt="Icon" />
                </Box>
                <Box className="feature-single">
                  <h1>Manage Workers</h1>
                  <Text>
                    Transform Financial Management with Contractor Wallet. Your
                    solution to hassle-free worker finances!
                  </Text>
                </Box>
              </Box>
              <Box className="col-sm-12 wow fadeInUp">
                <Box className="icon">
                  <img src="images/ft-tool.png" alt="Icon" />
                </Box>
                <Box className="feature-single">
                  <h1>Manage Tools</h1>
                  <Text>
                    Instantly locate tools and equipment, eliminating downtime.
                  </Text>
                </Box>
              </Box> */}
            </Box>

            <Box className="col-md-6 col-lg-4 features-left left-2">
            {data.rightContents.map((item) => (
                <Box className="col-sm-12 wow fadeInUp">
                  <Box className="icon">
                    <img src={item.image} alt="Icon" />
                  </Box>
                  <Box className="feature-single">
                    <h1>{item.title}</h1>
                    <Text>{item.text}</Text>
                  </Box>
                </Box>
              ))}
              {/* <Box className="col-sm-12 wow fadeInUp">
                <Box className="icon">
                  <img src="images/ft-expense.png" alt="Icon" />
                </Box>
                <Box className="feature-single">
                  <h1>Add Expenses</h1>
                  <p>
                    Stay on top of costs with instant updates on project-related
                    expenditures.
                  </p>
                </Box>
              </Box>
              <Box className="col-sm-12 wow fadeInUp">
                <Box className="icon">
                  <img src="images/ft-report.png" alt="Icon" />
                </Box>
                <Box className="feature-single">
                  <h1>Get Reports</h1>
                  <p>
                    Simplify your workflow – all your reports, just one click
                    away!
                  </p>
                </Box>
              </Box> */}
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default OurFeatures;
