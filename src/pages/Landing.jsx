import React from "react";
import Header from "../components/Landing/Header";
import HeroSection from "../components/Landing/HeroSection";
import Features from "../components/Landing/Features";
import Testimonials from "../components/Landing/Testimonials";
import FAQs from "../components/Landing/FAQs";
import CallToAction from "../components/Landing/CallToAction";
import Footer from "../components/Landing/Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <Testimonials />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
};

export default Landing;
