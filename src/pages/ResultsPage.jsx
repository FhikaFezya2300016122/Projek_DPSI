// src/pages/ResultsPage.jsx
import { Link } from 'react-router-dom';

export default function ResultsPage() {
    // Di aplikasi nyata, data hasil akan didapat dari state atau API
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-4">Puzzle Completed!</h1>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <h2 className="text-xl font-semibold">Your Score</h2>
                <p className="text-5xl font-bold text-teal-500 my-4">125 <span className="text-2xl text-gray-500">Points</span></p>
                <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg">
                    <h3 className="font-bold text-yellow-800">Badge Unlocked!</h3>
                    <p className="text-yellow-700">Congratulations, you've earned the "Word Smith" badge!</p>
                </div>

                <div className="mt-8">
                     <Link to="/activity">
                        <button className="bg-teal-500 text-white font-bold py-3 px-8 rounded-lg">
                            Back to Activity
                        </button>
                    </Link>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Review Questions</h2>
                <div className="space-y-3">
                    {/* Logika untuk menampilkan review jawaban bisa ditambahkan di sini */}
                    <div className="bg-white p-4 rounded-lg shadow">Question 1: Correct</div>
                    <div className="bg-white p-4 rounded-lg shadow">Question 2: Correct</div>
                </div>
            </div>
        </div>
    );
}