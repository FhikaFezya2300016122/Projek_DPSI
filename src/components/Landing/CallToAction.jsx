import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-[#EAFBF3] py-16 rounded-lg mx-4 md:mx-20 mt-10">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start your educational journey now!
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Risus magna sed tristique fames risus eu.
          Viverra sem viverra egestas est quis fames ullamcorper.
        </p>
        <a
          href="#"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-medium transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
