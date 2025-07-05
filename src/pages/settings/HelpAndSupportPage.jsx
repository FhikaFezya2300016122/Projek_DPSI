import { useState } from 'react';
import { Link } from 'react-router-dom';

// Data untuk FAQ
const faqData = [
  {
    question: 'How do I change my password?',
    answer: 'You can change your password by navigating to Settings > Change password. You will be asked to enter your current password and a new password.'
  },
  {
    question: 'How is the score calculated?',
    answer: 'The score is calculated based on the difficulty of the game and the correctness of your answers. There are also bonuses for consecutive correct answers.'
  },
  {
    question: 'Can I reset my progress?',
    answer: 'Currently, the feature to reset progress is not available. Please contact support for further assistance if you wish to do so.'
  }
];

// Komponen Accordion Item
const AccordionItem = ({ faq, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left py-4 px-2"
    >
      <span className="font-semibold text-gray-800">{faq.question}</span>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
      <p className="p-4 pt-0 text-gray-600">
        {faq.answer}
      </p>
    </div>
  </div>
);

export default function HelpAndSupportPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <Link to="/settings" className="p-2 rounded-full hover:bg-gray-200 mr-3">&larr;</Link>
        <div>
          <p className="text-sm text-gray-500">Settings &gt; Help & Support</p>
          <h1 className="text-3xl font-bold">Help & Support</h1>
        </div>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
        {/* Bagian FAQ */}
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="mb-8">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Bagian Kontak */}
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600">
          If you can't find the answer you're looking for, please don't hesitate to reach out to our support team.
        </p>
        <a 
          href="mailto:support@englify.app" 
          className="mt-4 inline-block text-teal-600 font-bold hover:underline"
        >
          support@englify.app
        </a>
      </div>
    </div>
  );
}