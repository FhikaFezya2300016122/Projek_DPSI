import React, { useState } from "react";

const faqs = [
  {
    question: "Apa manfaat menggunakan aplikasi ini untuk belajar bahasa inggris?",
    answer: "Aplikasi ini membantu siswa memahami bahasa Inggris melalui permainan interaktif dan tantangan yang menyenangkan.",
  },
  {
    question: "Bagaimana cara menggunakan game interaktif?",
    answer: "Setelah login, pengguna dapat memilih misi belajar berbasis game yang sesuai dengan tingkatannya.",
  },
  {
    question: "Apakah aplikasi ini bersifat gratis?",
    answer: "Ya, seluruh fitur utama bisa digunakan secara gratis. Versi premium tersedia untuk fitur tambahan.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Vulputate turpis purus ornare morbi.",
    answer: "Lorem ipsum dolor sit amet consectetur. Auctor nunc vitae malesuada.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Vulputate turpis purus ornare morbi.",
    answer: "Lorem ipsum dolor sit amet consectetur. Sed ac tortor id turpis tempor consequat.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faqs" className="py-24 bg-white text-center px-4">
      <p className="text-sm text-gray-500 tracking-wider uppercase font-medium mb-2">FAQs</p>
      <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-base">
        Lorem ipsum dolor sit amet consectetur. Tempus neque magna consequat id consequat.
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white border rounded-lg shadow-sm transition-all duration-300"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full px-6 py-4 flex items-center justify-between text-left text-gray-800 font-semibold hover:bg-gray-50 focus:outline-none"
            >
              {faq.question}
              <span className="text-xl font-bold">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-4 text-gray-600 text-sm text-left">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="font-semibold text-base mb-2">Still have questions?</p>
        <p className="text-gray-500 text-sm mb-4">For other questions, you can contact us below</p>
        <a
          href="#contact"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full inline-block font-medium transition"
        >
          Contact Admin
        </a>
      </div>
    </section>
  );
};

export default FAQs;
