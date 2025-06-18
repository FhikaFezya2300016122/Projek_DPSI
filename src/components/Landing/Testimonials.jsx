import React from "react";

const testimonials = [
  {
    name: "Aisyah Mahendra",
    role: "Student",
    text: "Learning feels like playing games! I’ve improved my vocabulary while having fun with quizzes and puzzles!",
  },
  {
    name: "Mr. David Brown",
    role: "Teacher",
    text: "Teaching has never been easier, the class management and interactive games make lessons exciting and effective.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-green-50 py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
      <p className="text-gray-600 mb-10">Hear from students and teachers who’ve transformed their learning experience with our platform!</p>
      <div className="grid md:grid-cols-2 gap-6 px-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded shadow">
            <p className="text-sm text-gray-700 mb-4">“{t.text}”</p>
            <p className="font-semibold">{t.name}</p>
            <p className="text-xs text-gray-500">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;