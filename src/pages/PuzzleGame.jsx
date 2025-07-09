// src/pages/PuzzleGame.jsx

import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DndContext } from '@dnd-kit/core';
import { puzzleDetail } from '../data/mockData';
import DraggableWord from '../components/puzzle/DraggableWord';
import DropZone from '../components/puzzle/DropZone';
import toast, { Toaster } from 'react-hot-toast';

export default function PuzzleGame() {
    const { gameId } = useParams();
    const navigate = useNavigate();
    const gameData = useMemo(() => puzzleDetail[gameId] || null, [gameId]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [wordBank, setWordBank] = useState(gameData?.questions[0].wordBank || []);
    const [answer, setAnswer] = useState([]);

    if (!gameData) {
        return <div>Game tidak ditemukan!</div>;
    }

    const currentQuestion = gameData.questions[currentQuestionIndex];

    function handleDragEnd(event) {
        const { over, active } = event;
        if (over?.id === 'answer-zone') {
            const droppedWord = wordBank.find(word => word.id === active.id);
            if (droppedWord) {
                setAnswer(prev => [...prev, droppedWord]);
                setWordBank(prev => prev.filter(word => word.id !== active.id));
            }
        }
    }

    function handleSubmit() {
        const userAnswer = answer.map(word => word.text).join(' ');
        const correctAnswer = currentQuestion.answer.join(' ');
        let pointsThisRound = 0;

        if (userAnswer === correctAnswer) {
            pointsThisRound = 10;
            setScore(prevScore => prevScore + pointsThisRound);
            toast.success('Jawaban Benar!');
        } else {
            toast.error('Jawaban Kurang Tepat.');
        }

        const isLastQuestion = currentQuestionIndex >= gameData.totalQuestions - 1;

        setTimeout(() => {
            if (isLastQuestion) {
                navigate('/results', {
                    state: {
                        pointsEarned: score + pointsThisRound,
                        gameTitle: gameData.title
                    }
                });
            } else {
                const nextIndex = currentQuestionIndex + 1;
                setCurrentQuestionIndex(nextIndex);
                setWordBank(gameData.questions[nextIndex].wordBank);
                setAnswer([]);
            }
        }, 1500);
    }

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <Toaster />
            <div className="text-center font-semibold mb-4 text-sm text-gray-600">
                Question {currentQuestionIndex + 1} of {gameData.totalQuestions}
            </div>

            <div className="flex justify-center gap-2 mb-6">
                {[...Array(gameData.totalQuestions)].map((_, index) => (
                    <div
                        key={index}
                        className={`w-full h-4 rounded-full transition-all duration-300 ${
                            index < currentQuestionIndex ? 'bg-teal-500' :
                            (index === currentQuestionIndex ? 'bg-yellow-400' : 'bg-gray-200')
                        }`}
                    />
                ))}
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <DndContext onDragEnd={handleDragEnd}>
                    <div className="p-4 bg-gray-100 rounded-lg mb-8">
                        <p className="text-center font-bold mb-2">Word Bank</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {wordBank.map((word) => (
                                <DraggableWord key={word.id} id={word.id}>
                                    <div className="bg-cyan-200 rounded-[12px] px-4 py-2 text-center font-semibold border-4 border-cyan-400 shadow-md">
                                        {word.text}
                                    </div>
                                </DraggableWord>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-center text-gray-600 mb-6 font-semibold">
                            {currentQuestion.instruction}
                        </p>
                        <div className="flex items-center gap-4 mb-6">
                            <img
                                src={currentQuestion.image}
                                alt="clue"
                                className="w-24 h-24 rounded-lg object-cover"
                            />
                            <p className="text-2xl font-bold">=</p>
                            <div className="flex-1">
                                <DropZone id="answer-zone">
                                    {answer.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {answer.map((word) => (
                                                <div
                                                    key={word.id}
                                                    className="bg-teal-500 text-white rounded-[12px] px-4 py-2 font-semibold border-4 border-teal-700 shadow-md"
                                                >
                                                    {word.text}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <span className="text-gray-400">Drop words here</span>
                                    )}
                                </DropZone>
                            </div>
                        </div>
                    </div>
                </DndContext>
            </div>

            <div className="max-w-4xl mx-auto mt-6">
                <button
                    onClick={handleSubmit}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition"
                >
                    {currentQuestionIndex < gameData.totalQuestions - 1 ? 'Submit Answer' : 'Finish Game'}
                </button>
            </div>
        </div>
    );
}