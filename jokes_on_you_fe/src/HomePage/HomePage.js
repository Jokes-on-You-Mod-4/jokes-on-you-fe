import React, { useState } from 'react';
import './HomePage.css'; 
import '../images/Smiley face1.png'

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="HomePage">
      <h1 className="animate-character">Jokes on You</h1>
      {/* <img src="/Smiley face1.png" alt="Smiley Face" /> */}

      <div className="category-container">
        {selectedCategory && <p>Selected Category: {selectedCategory}</p>}
        <label htmlFor="categorySelector">Select a Joke Category:</label>
        <select
          id="categorySelector"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">-- Select Category --</option>
        </select>
      </div>
    </div>
  );
}

export default HomePage;
