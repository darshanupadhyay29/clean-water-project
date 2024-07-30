import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the main source of fresh water?',
    options: [
      { text: 'Rivers', isCorrect: true },
      { text: 'Oceans', isCorrect: false },
    ],
  },
  {
    question: 'What percentage of the Earth’s water is fresh water?',
    options: [
      { text: '2.5%', isCorrect: true },
      { text: '10%', isCorrect: false },
    ],
  },
  {
    question: 'Which country has the most extensive water infrastructure?',
    options: [
      { text: 'United States', isCorrect: false },
      { text: 'Netherlands', isCorrect: true },
    ],
  },
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(prevScore => prevScore + 1);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <section className="py-16 px-4 md:px-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Quiz: Test Your Knowledge</h2>
        {!showResults ? (
          <div className="bg-white p-6 rounded shadow">
            <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
            <div className="flex flex-col space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.isCorrect)}
                  className={`px-4 py-2 rounded text-white ${
                    option.isCorrect ? 'bg-blue-500 hover:bg-blue-600' : 'bg-red-500 hover:bg-red-600'
                  }`}
                >
                  {option.text}
                </button>
              ))}
            </div>
            <p className="mt-4 text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
          </div>
        ) : (
          <div className="bg-white p-6 rounded shadow text-center">
            <p className="text-2xl font-semibold mb-4">Quiz Complete!</p>
            <p className="text-lg mb-4">Your Score: {score} / {questions.length}</p>
            <button
              onClick={restartQuiz}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
  