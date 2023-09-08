import React, { useState, useEffect } from 'react';
import './TriviaPage.css';
import '../images/Smiley face1.png'

function TriviaPage() {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [triviaArray, setTriviaArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('localhost:5000/api/v1/trivia?category=');
      const data = await response.json();
      console.log(data)
      setTriviaArray(data);
    }
    fetchData();
  }, []);

  const handleInputAnswer = (event, index) => {
    setSelectedAnswers(prevAnswers => ({
      ...prevAnswers,
      [index]: event.target.value
    }));
  };

  const handleSubmitAnswers = () => {
    // Hold answers?
    console.log(selectedAnswers);
  };

  return (
    <div className="TriviaPage">
      <h1 className="animate-character">Groovy Baby!</h1>
      {/* <img src="/Smiley face1.png" alt="Smiley Face" /> */}

      <div className="trivia-container">
        {triviaArray.map((question, index) => (
          <div key={index}>
            <p>{question}</p>
            <input value={selectedAnswers[index] || ''} onChange={(event) => handleInputAnswer(event, index)} />
          </div>
        ))}
        <button onClick={handleSubmitAnswers}>Submit Answers</button>
      </div>
    </div>
  );
}

export default TriviaPage;
