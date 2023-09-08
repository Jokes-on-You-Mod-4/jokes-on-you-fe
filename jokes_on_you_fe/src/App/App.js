import React from 'react';
import './App.css';
import HomePage from '../HomePage/HomePage';
import getData from '../ApiCalls';


function App() {
getData('localhost:5000/api/v1/trivia?category=<category>')
.then(data => {
  console.log(data)
})

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <HomePage />
    </div>
  );
}

export default App;