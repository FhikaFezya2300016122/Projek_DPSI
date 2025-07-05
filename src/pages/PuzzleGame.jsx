// src/pages/PuzzleGame.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { DndContext } from '@dnd-kit/core';
import { puzzleDetail } from '../data/mockData';
import DraggableWord from '../components/puzzle/DraggableWord';
import DropZone from '../components/puzzle/DropZone';

export default function PuzzleGame() {
  const { gameId } = useParams();
  const gameData = puzzleDetail[gameId];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [wordBank, setWordBank] = useState(gameData.questions[0].wordBank);
  const [answer, setAnswer] = useState(null); // Will hold the dropped word object

  const currentQuestion = gameData.questions[currentQuestionIndex];

  function handleDragEnd(event) {
    const { over, active } = event;
    if (over && over.id === 'answer-zone') {
      const droppedWord = wordBank.find(word => word.id === active.id);
      if (droppedWord) {
        setAnswer(droppedWord);
        setWordBank(prev => prev.filter(word => word.id !== active.id));
      }
    }
  }
  
  // NOTE: Logika ini disederhanakan. Untuk jawaban multi-kata,
  // 'answer' harus berupa array dan ada beberapa DropZone.
  // Ini adalah contoh untuk jawaban satu kata.

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Header */}
      <div className="text-center font-semibold mb-4">
        {currentQuestionIndex + 1} / {gameData.totalQuestions} Questions
      </div>
      
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <DndContext onDragEnd={handleDragEnd}>
          {/* Bank Kata */}
          <div className="p-4 bg-gray-100 rounded-lg mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {wordBank.map((word) => (
                <DraggableWord key={word.id} id={word.id}>
                  {word.text}
                </DraggableWord>
              ))}
            </div>
          </div>
          
          {/* Area Soal */}
          <div>
            <p className="text-center text-gray-600 mb-6">{currentQuestion.instruction}</p>
            <div className="flex items-center gap-4 mb-6">
              <img src={currentQuestion.image} alt="clue" className="w-24 h-24 rounded-lg object-cover"/>
              <p className="text-2xl font-bold">=</p>
              <div className="flex-1">
                 <DropZone id="answer-zone">
                  {answer ? (
                    <div className="p-3 bg-teal-400 text-white rounded-lg font-semibold">
                      {answer.text}
                    </div>
                  ) : (
                     <span className="text-gray-400">Drop word here</span>
                  )}
                </DropZone>
              </div>
            </div>
          </div>
        </DndContext>
      </div>

      <div className="max-w-4xl mx-auto mt-6">
        {currentQuestionIndex < gameData.totalQuestions - 1 ? (
             <button onClick={() => alert("Next question logic here")} className="w-full bg-teal-500 text-white py-3 rounded-lg font-bold">
                Submit
             </button>
        ) : (
            <Link to={`/results/${gameId}`}>
                <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-bold">
                    Finish
                </button>
            </Link>
        )}
      </div>
    </div>
  );
}