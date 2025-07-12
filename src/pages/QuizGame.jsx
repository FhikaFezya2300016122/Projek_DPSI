// src/pages/QuizGame.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import toast, { Toaster } from 'react-hot-toast';

const QuizGame = () => {
    const { quizId } = useParams();
    const navigate = useNavigate();

    const [quizTitle, setQuizTitle] = useState('');
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isAnswered, setIsAnswered] = useState(false);

    const fetchQuizData = useCallback(async () => {
        setLoading(true);
        // Ambil judul kuis
        const { data: quizData } = await supabase.from('quizzes').select('title').eq('id', quizId).single();
        if (quizData) setQuizTitle(quizData.title);

        // Ambil semua pertanyaan untuk kuis ini beserta opsinya
        const { data: questionsData, error } = await supabase
            .from('quiz_questions')
            .select(`*, options:quiz_options (*)`)
            .eq('quiz_id', quizId);
        
        if (error) {
            toast.error("Gagal memuat data kuis.");
        } else {
            setQuestions(questionsData);
        }
        setLoading(false);
    }, [quizId]);

    useEffect(() => {
        fetchQuizData();
    }, [fetchQuizData]);

    const handleAnswer = () => {
        if (selectedOption === null) {
            toast.error("Pilih salah satu jawaban.");
            return;
        }
        setIsAnswered(true);

        const correctOption = questions[currentQuestionIndex].options.find(opt => opt.is_correct);

        if (selectedOption === correctOption.id) {
            setScore(prev => prev + 10);
            toast.success("Jawaban Benar!");
        } else {
            toast.error("Jawaban Salah!");
        }

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                setSelectedOption(null);
                setIsAnswered(false);
            } else {
                // Game selesai, navigasi ke halaman hasil
                navigate('/results', {
                    state: {
                        pointsEarned: score + (selectedOption === correctOption.id ? 10 : 0),
                        gameTitle: quizTitle || 'Kuis'
                    }
                });
            }
        }, 2000);
    };

    if (loading || questions.length === 0) {
        return <div className="p-8 text-center">Memuat game kuis...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];
    
    // Fungsi untuk memberi warna pada pilihan jawaban
    const getOptionClass = (optionId) => {
        if (!isAnswered) {
            return selectedOption === optionId ? 'bg-yellow-200 border-yellow-400' : 'bg-white hover:bg-gray-100';
        }
        const option = currentQuestion.options.find(opt => opt.id === optionId);
        if (option.is_correct) {
            return 'bg-green-200 border-green-400';
        }
        if (selectedOption === optionId && !option.is_correct) {
            return 'bg-red-200 border-red-400';
        }
        return 'bg-white';
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <Toaster />
            <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl">
                <div className="mb-4">
                    <p className="text-sm text-gray-500">Pertanyaan {currentQuestionIndex + 1} dari {questions.length}</p>
                    <h1 className="text-2xl font-bold mt-2">{currentQuestion.question_text}</h1>
                </div>

                <div className="space-y-4">
                    {currentQuestion.options.map(option => (
                        <div
                            key={option.id}
                            onClick={() => !isAnswered && setSelectedOption(option.id)}
                            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${getOptionClass(option.id)}`}
                        >
                            {option.option_text}
                        </div>
                    ))}
                </div>

                <button
                    onClick={handleAnswer}
                    disabled={isAnswered}
                    className="w-full mt-8 py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 disabled:bg-gray-400"
                >
                    Jawab
                </button>
            </div>
        </div>
    );
};

export default QuizGame;