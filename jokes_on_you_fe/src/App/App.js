import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from '../HomePage/HomePage';
<<<<<<< HEAD
import GetData from '../ApiCalls';
=======
import getData from '../ApiCalls';
import TriviaPage from '../TriviaPage/TriviaPage';
>>>>>>> 8c9a56102a0a76f13f0e7b5ab2611b5acb3a3461

function App() {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    
    GetData('localhost:5000/api/v1/trivia?category=')
      .then(data => {
        console.log(data); 
        setFetchedData(data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      </header>
<<<<<<< HEAD
      <HomePage data={fetchedData} /> 
=======
      <TriviaPage />
>>>>>>> 8c9a56102a0a76f13f0e7b5ab2611b5acb3a3461
    </div>
  );
}

export default App;
