import React, { useState } from 'react';
import questions from './Question';

export default function KepribadianPage() {
  const [answers, setAnswers] = useState([]);

  function handleAnswer(questionIndex, optionValue) {
    // Update the answer for the current question
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = optionValue;
    setAnswers(updatedAnswers);
  }

  return (
    <div>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          <div>
            {question.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                onClick={() => handleAnswer(index, option.value)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button onClick={() => console.log(answers)}>Submit</button>
    </div>
  );
}


