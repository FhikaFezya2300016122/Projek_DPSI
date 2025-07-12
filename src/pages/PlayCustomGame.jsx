// src/pages/PlayCustomGame.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { DndContext } from '@dnd-kit/core';
import DraggableWord from '../components/puzzle/DraggableWord';
import DropZone from '../components/puzzle/DropZone';
import toast, { Toaster } from 'react-hot-toast';

const PlayCustomGame = () => {
    const { gameId } = useParams();
    const navigate = useNavigate();

    const [game, setGame] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [wordBank, setWordBank] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [score, setScore] = useState(0);

    const fetchGameData = useCallback(async () => {
        setLoading(true);
        // 1. Ambil detail game utama
        const { data: gameData, error: gameError } = await supabase
            .from('games')
            .select('*')
            .eq('id', gameId)
            .single();

        // 2. Ambil semua pertanyaan & bank katanya untuk game ini
        const { data: questionsData, error: questionsError } = await supabase
            .from('custom_game_questions')
            .select('*, word_bank:custom_game_word_bank(word)')
            .eq('game_id', gameId);

        if (gameError || questionsError) {
            console.error(gameError || questionsError);
            toast.error("Gagal memuat data game.");
            setLoading(false);
            return;
        }

        setGame(gameData);
        setQuestions(questionsData);
        
        // Atur bank kata untuk pertanyaan pertama
        if (questionsData && questionsData.length > 0) {
            setWordBank(questionsData[0].word_bank.map((item, index) => ({
                id: `w-${index}`,
                text: item.word
            })));
        }

        setLoading(false);
    }, [gameId]);

    useEffect(() => {
        fetchGameData();
    }, [fetchGameData]);

    const handleSubmit = () => {
        const currentQuestion = questions[currentQuestionIndex];
        const userAnswer = answer.map(word => word.text).join(',');
        const correctAnswer = currentQuestion.correct_answer.join(',');

        let pointsThisRound = 0;
        if (userAnswer === correctAnswer) {
            pointsThisRound = 10;
            setScore(prev => prev + pointsThisRound);
            toast.success("Jawaban Benar!");
        } else {
            toast.error("Jawaban Kurang Tepat.");
        }

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                const nextIndex = currentQuestionIndex + 1;
                setCurrentQuestionIndex(nextIndex);
                setAnswer([]);
                // Atur bank kata untuk pertanyaan selanjutnya
                setWordBank(questions[nextIndex].word_bank.map((item, index) => ({
                    id: `w-${nextIndex}-${index}`,
                    text: item.word
                })));
            } else {
                // Game Selesai
                navigate('/results', {
                    state: {
                        pointsEarned: score + pointsThisRound,
                        gameTitle: game.title
                    }
                });
            }
        }, 1500);
    };

    function handleDragEnd(event) {
        if (event.over?.id === 'answer-zone') {
            const droppedWord = wordBank.find(word => word.id === event.active.id);
            if (droppedWord) {
                setAnswer(prev => [...prev, droppedWord]);
                setWordBank(prev => prev.filter(word => word.id !== event.active.id));
            }
        }
    }

    if (loading) return <div className="p-8 text-center">Memuat game...</div>;
    if (!game || questions.length === 0) return <div className="p-8 text-center">Game tidak ditemukan atau tidak memiliki pertanyaan!</div>;

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <Toaster />
            <div className="text-center font-semibold mb-4 text-sm text-gray-600">
                Pertanyaan {currentQuestionIndex + 1} dari {questions.length}
            </div>
            {/* Progress Bar */}
            <div className="flex justify-center gap-2 mb-6">
                {[...Array(questions.length)].map((_, index) => (
                    <div key={index} className={`w-full h-4 rounded-full ${index <= currentQuestionIndex ? 'bg-teal-400' : 'bg-gray-200'}`} />
                ))}
            </div>

            <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <DndContext onDragEnd={handleDragEnd}>
                    <div className="p-4 bg-gray-100 rounded-lg mb-8">
                        <p className="text-center font-bold mb-2">Bank Kata</p>
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
                        <p className="text-center text-gray-600 mb-6 font-semibold">{currentQuestion.question_text}</p>
                        <div className="flex items-center gap-4 mb-6">
                            {currentQuestion.image_url && (
                                <img src={currentQuestion.image_url} alt="clue" className="w-24 h-24 rounded-lg object-cover"/>
                            )}
                            <p className="text-2xl font-bold">=</p>
                            <div className="flex-1">
                                <DropZone id="answer-zone">
                                    {answer.length > 0 ? (
                                        <div className="flex flex-wrap gap-2">
                                            {answer.map((word) => (
                                                <div key={word.id} className="bg-teal-500 text-white rounded-[12px] px-4 py-2 font-semibold border-4 border-teal-700">
                                                    {word.text}
                                                </div>
                                            ))}
                                        </div>
                                    ) : <span className="text-gray-400">Letakkan kata di sini</span>}
                                </DropZone>
                            </div>
                        </div>
                    </div>
                </DndContext>
            </div>
            <div className="max-w-4xl mx-auto mt-6">
                <button onClick={handleSubmit} className="w-full bg-green-600 text-white py-3 rounded-lg font-bold">
                    {currentQuestionIndex < questions.length - 1 ? 'Submit' : 'Finish Game'}
                </button>
            </div>
        </div>
    );
};

export default PlayCustomGame;