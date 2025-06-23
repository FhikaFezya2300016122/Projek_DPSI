import React from "react";
import User1 from "../../Images/user1.png";
import User2 from "../../Images/user2.png";
import User3 from "../../Images/user3.png";
import User4 from "../../Images/user4.png";

const testimonials = [
  {
    name: "Aisyah Manohara",
    role: "Student",
    text: "Learning feels like playing games!, I’ve improved my vocabulary while having fun with quizzes and puzzles!",
    rating: 5,
    avatar: User1,
  },
  {
    name: "Mr. David Brown",
    role: "Teacher",
    text: "Teaching has never been easier, the class management and interactive games make lessons exciting and effective.",
    rating: 5,
    avatar: User2,
  },
  {
    name: "Sasha Petromax",
    role: "Student",
    text: "Lorem ipsum dolor sit amet consectetur. Volutpat est aliquet arcu eget malesuada interdum. Imperdiet at non maecenas congue id lorem pulvinar ultrices pharetra.",
    rating: 5,
    avatar: User3,
  },
  {
    name: "Michael Ite",
    role: "Student",
    text: "Lorem ipsum dolor sit amet consectetur. Volutpat est aliquet arcu eget malesuada interdum. Imperdiet at non maecenas congue id lorem pulvinar ultrices pharetra.",
    rating: 4,
    avatar: User4,
  },
];

const StarRow = ({ count }) => {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-xl ${i < count ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#F3FDDC] py-24 text-center">
      <p className="text-sm tracking-widest text-gray-500 font-medium uppercase mb-2">
        Testimonials
      </p>
      <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-16">
        Hear from students and teachers who’ve transformed their learning experience with our platform!
      </p>

      <div className="grid md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl text-left shadow-sm">
            <p className="text-gray-800 text-base mb-6 leading-relaxed">“{t.text}”</p>
            <StarRow count={t.rating} />
            <div className="flex items-center gap-4 mt-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-base">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
