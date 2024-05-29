import React, { useState } from 'react';
import './App.css';
//import MenuBar from './components/menu';


const Search = ({onSearch}) => {

    const [zipCode, setZipcode] = useState('');
    const handleChange = (event) => {

        //updates state with new info
        setZipcode(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); //prevents default form submission behavior
        onSearch(zipCode); //executes search funtions passed as prop
    };

        return (
            <form onSubmit={handleSubmit}>
                <input 
                    type = 'Number'
                    value={zipCode}
                    onChange={handleChange}
                    placeholder='Enter zipcode'
            />
            <button type='submit'>Search</button>
            </form>
        );
};

export default Search;