import React from "react";

/* Import icon gambar */
import GameIcon from "../../Images/Game Controller.png";
import ClassIcon from "../../Images/Classroom.png";
import RewardIcon from "../../Images/Leaderboard.png";

const Features = () => {
  const featureItems = [
    {
      title: "Play and Learn with Fun Games",
      desc: "Improve vocabulary and grammar through interactive games.",
      icon: GameIcon,
    },
    {
      title: "Join Classes Effortlessly with a Code",
      desc: "Easily connect with your teacher’s class using a unique code.",
      icon: ClassIcon,
    },
    {
      title: "Compete and Achieve Rewards",
      desc: "Climb the leaderboard and earn badges for your milestones.",
      icon: RewardIcon,
    },
  ];

  return (
    <section id="features" className="py-20 bg-white text-center">
      {/* Heading */}
      <p className="text-sm font-medium text-gray-500 tracking-widest mb-1">FEATURES</p>
      <h2 className="text-4xl font-bold mb-4">Learn English in a Fun and Effective Way</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Dive into a world of fun and interactive English learning. Our gamified platform
        makes mastering the language exciting and rewarding!
      </p>

      {/* Kartu fitur */}
      <div className="grid md:grid-cols-3 gap-6 md:px-20 px-6 mb-10">
        {featureItems.map((item, i) => (
          <div
            key={i}
            className="bg-lime-100 py-10 px-6 rounded-xl shadow hover:shadow-md transition flex flex-col items-center text-center"
          >
            <img src={item.icon} alt="icon" className="w-20 h-20 mb-6" />
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-base text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Tombol CTA */}
      <div className="flex justify-center gap-4">
        <button className="bg-green-500 text-white px-6 py-2 rounded-full text-sm hover:bg-green-600">
          Learn more
        </button>
        <button className="border border-gray-300 px-6 py-2 rounded-full text-sm hover:bg-gray-100">
          Play
        </button>
      </div>
    </section>
  );
};

export default Features;
