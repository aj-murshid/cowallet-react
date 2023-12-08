import React from "react";
import "../index.css";
import "../utils/css/bootstrap.min.css";
import "../utils/css/color.css";
import "../utils/css/plugins.css";
import "../utils/css/plugins.css";
import Navbar from "../components/Navbar";
import HeroSection from "../sections/HeroSection";
import BoxedFeature from "../sections/BoxedFeature";
import LogoSlider from "../components/LogoSlider";
import OurFeatures from "../sections/OurFeatures";
import MoreFeatures from "../sections/MoreFeatures";
import TabSection from "../sections/TabSection";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import Footer from "../sections/Footer";
// import "../utils/iconfonts.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <BoxedFeature />
      <LogoSlider />
      <OurFeatures />
      <MoreFeatures />
      <TabSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
