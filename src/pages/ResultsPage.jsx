// src/pages/ResultsPage.jsx
import { Link } from 'react-router-dom';

const reviewData = [
  {
    question: 'The eye is an important organ of vision for humans',
    image: '/images/eye.jpg', // ganti dengan path gambar kamu
    correct: true,
  },
  {
    question: 'The eye is an important organ of vision for humans',
    image: '/images/eye.jpg',
    correct: false,
  },
];

export default function ResultsPage() {
  const correctCount = 8;
  const incorrectCount = 2;
  const total = correctCount + incorrectCount;

  const progress = (correctCount / total) * 100;

  return (
    <div className="p-4 max-w-5xl mx-auto text-center">
      <h1 className="text-xl font-bold mb-2 text-gray-700">🎉 Kerja yang luar biasa! 🎉</h1>
      <p className="mb-6 text-gray-600">Kamu telah berhasil menyelesaikan tantangan puzzle dengan baik.</p>

      <div className="bg-white rounded-xl shadow-md p-4 text-left">
        <h2 className="font-semibold mb-3">Performance Stats</h2>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex space-x-2">
            {Array.from({ length: total }).map((_, index) => (
              <div
                key={index}
                className={`h-4 rounded-full flex-1 transition-all ${
                  index < correctCount ? 'bg-teal-300' : 'bg-gray-100'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Detail Stats */}
        <ul className="divide-y text-sm text-gray-700 mb-4">
          <li className="py-2 flex justify-between">
            <span>Correct</span> <strong>{correctCount} Questions</strong>
          </li>
          <li className="py-2 flex justify-between">
            <span>Incorrect</span> <strong>{incorrectCount} Questions</strong>
          </li>
          <li className="py-2 flex justify-between">
            <span>Achievement Points</span> <strong>40 Points</strong>
          </li>
          <li className="py-2 flex justify-between">
            <span>Achievement Bonus</span> <strong>5 Points</strong>
          </li>
          <li className="py-2 flex justify-between">
            <span>Reward Points</span> <strong>10 Points</strong>
          </li>
          <li className="py-2 flex justify-between font-semibold">
            <span>Total Points</span> <strong>55 Points</strong>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <Link to="/dashboard" className="flex-1">
            <button className="w-full bg-teal-500 text-white font-bold py-2 rounded-lg">
              Back to Dashboard
            </button>
          </Link>
          <button className="flex-1 bg-yellow-100 text-yellow-800 font-semibold py-2 rounded-lg">
            Share Performance
          </button>
        </div>
      </div>

      {/* Badge Unlock Section */}
      <div className="mt-6 bg-white p-4 rounded-xl shadow-md text-center">
        <h2 className="text-lg font-bold text-yellow-600 mb-2">🏆 Badge Unlocked! 🎉</h2>
        <img src="/images/badge.png" alt="Badge" className="h-20 mx-auto mb-2" />
        <ul className="text-sm text-gray-700">
          <li><strong>Badge Name:</strong> Visual Badge</li>
          <li><strong>Description:</strong> Selesaikan 8 dari 10 puzzle dengan benar</li>
          <li><strong>Unlocked On:</strong> 6 Juli 2025</li>
        </ul>
        <button className="mt-4 bg-teal-100 text-teal-700 px-4 py-2 rounded-lg">
          🎯 Keep playing and achieve more!
        </button>
      </div>

      {/* Review Section */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-3 text-left">Review Questions</h2>
        <div className="space-y-4">
          {reviewData.map((item, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md flex items-center p-2 ${
                item.correct ? 'border border-green-300' : 'border border-red-300'
              }`}
            >
              <img
                src={item.image}
                alt="Visual"
                className="w-14 h-14 rounded-lg object-cover mr-3 border"
              />
              <div className="flex-1">
                <div className="flex items-center">
                  <span
                    className={`text-lg font-bold ${
                      item.correct ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {item.correct ? '✔' : '✘'}
                  </span>
                  <span className="ml-2 text-sm text-gray-800">{item.question}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}