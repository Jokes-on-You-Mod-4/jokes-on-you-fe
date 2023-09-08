import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from '../HomePage/HomePage';
import GetData from '../ApiCalls';

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
      <HomePage data={fetchedData} /> 
    </div>
  );
}

export default App;
