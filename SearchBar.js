import React, { useState } from 'react';
import axios from 'axios';

const Finder = () => {
  const [zipcode, setZipcode] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError();
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/bars/by-zipcode`, {
        params: { zipcode }
      });
      console.log(response.data); // Inspect the API response
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data');
    }
  };

  return (
    <div>
      <form className="input" onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={zipcode} 
          onChange={(e) => setZipcode(e.target.value)} 
          placeholder="Enter your Zipcode"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      <div>
        {results.length > 0 ? (
          results.map((bar, index) => (
            <div key={index}>
              <h2>{bar.barName}</h2>
              <p>{bar.location}</p>
              <p>{bar.zipcode}</p>
              <p>{bar.description}</p>
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
