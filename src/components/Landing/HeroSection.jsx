import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-16 bg-green-100">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Build your future! Sharpen your english skills through exciting missions!
      </h1>
      <p className="text-gray-600 mb-6">
        Join our interactive platform designed for middle school students.
        Experience learning English like never before with engaging games and activities!
      </p>
      <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;