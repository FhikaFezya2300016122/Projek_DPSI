import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DndContext } from '@dnd-kit/core';
import { puzzleDetail } from '../data/mockData';
import DraggableWord from '../components/puzzle/DraggableWord';
import DropZone from '../components/puzzle/DropZone';

export default function PuzzleGame() {
  const { gameId } = useParams();
  const gameData = puzzleDetail[gameId];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [wordBank, setWordBank] = useState(gameData.questions[0].wordBank);
  const [answer, setAnswer] = useState([]);

  const currentQuestion = gameData.questions[currentQuestionIndex];

  function handleDragEnd(event) {
    const { over, active } = event;
    if (over && over.id === 'answer-zone') {
      const droppedWord = wordBank.find(word => word.id === active.id);
      if (droppedWord) {
        setAnswer(prev => [...prev, droppedWord]);
        setWordBank(prev => prev.filter(word => word.id !== active.id));
      }
    }
  }

  function handleSubmit() {
    if (currentQuestionIndex < gameData.totalQuestions - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setWordBank(gameData.questions[nextIndex].wordBank);
      setAnswer([]);
    } else {
      window.location.href = `/results/${gameId}`;
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="text-center font-semibold mb-4 text-sm text-gray-600">
        Question {currentQuestionIndex + 1} of {gameData.totalQuestions}
      </div>

      {/* ✅ Progress bar bulat */}
      <div className="flex justify-center gap-2 mb-6">
        {[...Array(gameData.totalQuestions)].map((_, index) => (
          <div
            key={index}
            className={`w-6 h-4 md:w-8 md:h-4 rounded-full transition-all duration-300 ${
              index <= currentQuestionIndex ? 'bg-teal-400' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <DndContext onDragEnd={handleDragEnd}>
          {/* Word Bank */}
          <div className="p-4 bg-gray-100 rounded-lg mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {wordBank.map((word) => (
                <DraggableWord key={word.id} id={word.id}>
                  <div className="bg-yellow-200 rounded-[12px] px-4 py-2 text-center font-semibold border-4 border-yellow-400 shadow-md">
                    {word.text}
                  </div>
                </DraggableWord>
              ))}
            </div>
          </div>

          {/* Question Area */}
          <div>
            <p className="text-center text-gray-600 mb-6">
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
          className="w-full bg-teal-500 text-white py-3 rounded-lg font-bold hover:bg-teal-600 transition"
        >
          {currentQuestionIndex < gameData.totalQuestions - 1 ? 'Submit' : 'Finish'}
        </button>
      </div>
    </div>
  );
}