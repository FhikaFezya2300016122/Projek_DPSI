import React from "react";

const features = [
  {
    title: "Play and Learn with Fun Games",
    desc: "Improve vocabulary and grammar through interactive games.",
  },
  {
    title: "Join Classes Effortlessly with a Code",
    desc: "Easily connect with your teacher’s class using a unique code.",
  },
  {
    title: "Compete and Achieve Rewards",
    desc: "Climb the leaderboard and earn badges for your milestones.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl font-bold mb-4">Learn English in a Fun and Effective Way</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">
        Dive into a world of fun and interactive English learning. Our gamified platform makes mastering the language exciting and rewarding!
      </p>
      <div className="grid md:grid-cols-3 gap-6 px-6">
        {features.map((item, index) => (
          <div key={index} className="bg-green-50 p-6 rounded shadow">
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
