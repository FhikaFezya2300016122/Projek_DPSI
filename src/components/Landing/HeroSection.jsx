import React from "react";

/* ─── Import semua gambar ─── */
import Dashboard from "../../Images/oioioio 1.png";
import Bronze from "../../Images/bronze 1.png";
import Silver from "../../Images/silver 1.png";
import Gold from "../../Images/gold 1.png";
import Platinum from "../../Images/platinum 1.png";
import Badge from "../../Images/badge 4.png";
import BorderRing from "../../Images/border232 1.png";
import Leaderboard from "../../Images/leaderboard 1.png";
/* ─────────────────────────── */

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-green-100 overflow-visible pt-20 pb-0 text-center">
      {/* Ring Dekorasi Kanan Atas */}
      <img
        src={BorderRing}
        alt="Ring Decoration"
        className="hidden md:block absolute top-10 right-10 w-16 h-16 animate-spin-slow"
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Judul dan CTA */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-snug mb-4">
          Build your future! Sharpen your english skills through exciting missions!
        </h1>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join our interactive platform designed for middle school students.
          Experience learning English like never before with engaging games and activities!
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition">
          Get Started
        </button>

        {/* Layout utama */}
        <div className="mt-14 flex justify-center items-end gap-6 relative">
          {/* BADGES VERTIKAL */}
          <div className="hidden md:flex flex-col gap-4 items-center pt-2">
            {[Bronze, Silver, Gold, Platinum, Badge].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Badge ${i}`}
                className="h-14 w-auto object-contain"
              />
            ))}
          </div>

          {/* WRAPPER DASHBOARD + LEADERBOARD */}
          <div className="relative w-full max-w-4xl mx-auto overflow-visible">
            {/* Dashboard */}
            <img
              src={Dashboard}
              alt="Englify Dashboard"
              className="w-full rounded-xl object-cover h-auto"
            />

            {/* Leaderboard */}
            <img
              src={Leaderboard}
              alt="Leaderboard"
              className="hidden md:block absolute -right-14 top-1/2 -translate-y-1/2 w-[280px] max-w-[80%] rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
