import React, { useState, useEffect } from 'react';
import './HomePage.css';
import GetData from '../ApiCalls';

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [jokes, setJokes] = useState([]);

  const handleCategoryChange = async (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);

    if (newCategory) {
      try {
        const data = await GetData(`localhost:5000/api/v1/trivia?category=${newCategory}`);
        setJokes(data); 
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    GetData('localhost:5000/api/v1/categories')
      .then(data => {
        // If the API returns an array of category options
        setCategoryOptions(data);
      })
      .catch(error => {
        console.error('Error fetching category options:', error);
      });
  }, []);

  return (
    <div className="HomePage">
      <h1 className="animate-character">Jokes on You</h1>
      <div className="category-container">
        {selectedCategory && <p>Selected Category: {selectedCategory}</p>}
        <label htmlFor="categorySelector">Select a Joke Category:</label>
        {categoryOptions && categoryOptions.length > 0 && (
          <select
            id="categorySelector"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">-- Select Category --</option>
            {categoryOptions.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        )}
      </div>

      {jokes && jokes.length > 0 && (
        <div className="jokes-container">
          <h2>Jokes:</h2>
          <ul>
            {jokes.map((joke, index) => (
              <li key={index}>{joke.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HomePage;
