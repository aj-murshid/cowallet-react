import React from "react";
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
// import "../utils/iconfonts.css"
import data from "../data/tabSection.json";
import Box from "../components/elements/Box";
import Image from "../components/elements/Image";
import Text from "../components/elements/Text";

const TabSection = () => {
  return (
    <>
      <section className="dtr-section dtr-py-100">
        <Box className="container">
          <Box className="row dtr-mb-30">
            <Box className="col-12 text-center">
              <h2>How it works?</h2>
              <p>Revolutionizing Construction Management.</p>
              <Box className="dtr-styled-divider divider-center bg-light-violet"></Box>
            </Box>
          </Box>

          <Box className="row d-flex align-items-center dtr-features-tab">
            <Box className="col-12 col-md-6">
              <Box className="tab-content" id="v-pills-tabContent">
                {data.images.map((item) => (
                  <Box
                    key={item.key}
                    className={item.className}
                    id={item.id}
                    role={item.role}
                    aria-labelledby={item.ariaLabelledby}
                  >
                    <Image src={item.image} alt={item.alt} />
                  </Box>
                ))}
                {/* <Box
                  className="tab-pane fade show active"
                  id="features-tab-2"
                  role="tabpanel"
                  aria-labelledby="features-tab-2-tab"
                >
                  <img src="images/dashboard.png" alt="image" />
                </Box>
                <Box
                  className="tab-pane fade"
                  id="features-tab-3"
                  role="tabpanel"
                  aria-labelledby="features-tab-3-tab"
                >
                  <img src="images/dashboard.png" alt="image" />
                </Box> */}
              </Box>
            </Box>

            <Box className="col-12 col-md-6">
              <Box
                className="nav flex-column nav-pills"
                role="tablist"
                aria-orientation="vertical"
              >
                {data.contents.map((item) => (
                  <a
                    key={item.key}
                    className={item.class}
                    id={item.id}
                    data-toggle="pill"
                    href={item.href}
                    role="tab"
                    aria-controls={item.ariaControls}
                    aria-selected={item.ariaSelected}
                  >
                    <h4 className="font-weight-600">{item.title}</h4>
                    <Text>{item.text}</Text>
                  </a>
                ))}

                {/* <a
                  className="nav-link active"
                  id="features-tab-2-tab"
                  data-toggle="pill"
                  href="#features-tab-2"
                  role="tab"
                  aria-controls="features-tab-2"
                  aria-selected="true"
                >
                  <h4 className="font-weight-600">Build Your Flow</h4>
                  <p>
                    Grant on-site supervisors direct control from the field.
                    Manage projects, allocate tasks, and monitor real-time
                    progress. Contractor Wallet provides the flexibility to make
                    crucial decisions on the spot, enhancing on-site
                    empowerment. Unified Collaboration:
                  </p>
                </a>

                <a
                  className="nav-link"
                  id="features-tab-3-tab"
                  data-toggle="pill"
                  href="#features-tab-3"
                  role="tab"
                  aria-controls="features-tab-3"
                  aria-selected="false"
                >
                  <h4 className="font-weight-600">Manage All Users</h4>
                  <p>
                    Foster collaboration among site engineers, supervisors, and
                    workers seamlessly. Contractor Wallet enhances
                    communication, facilitates real-time updates, and ensures
                    everyone is on the same page. Streamline project teamwork
                    effortlessly.
                  </p>
                </a> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default TabSection;
