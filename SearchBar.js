import React, { useState } from 'react';
import axios from 'axios';

const Finder = () => {
  const [zipcode, setZipcode] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null); // Reset error state
    try {
      const response = await axios.get(`http://localhost:3000/api/bars/by-zipcode?zipcode=${zipcode}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
    }
  };

  return (
    <div>
      <form className="input" onSubmit={handleSubmit}>
        <label>
          Enter your Zipcode
          <input 
            type="text" 
            value={zipcode} 
            onChange={(e) => setZipcode(e.target.value)} 
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      <div className="response-container">
        {results.length > 0 ? (
          results.map((bar) => (
            <div key={bar._id}>
              <h2>{bar.name}</h2>
              <p>{bar.location}</p>
              <p>{bar.description}</p>
              <p>{bar.zipcode}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Finder;
