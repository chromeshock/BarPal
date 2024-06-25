import React from "react";
//import './App.css';
import BarDisplay from './BarDisplay.js';
import Finder from "./SearchBar.js";

const Home = () => (
    <div>
        <h1 className="container-Search">
            Bar Pal
        </h1>
        <h4 className="explainer-container">
            See what kind of cocktails, drinks and happy hour specials
        </h4>
        <div>
            <BarDisplay />
        </div>
        <div className="input-Text">
            <Finder /> 
        </div>
    </div>
)

export default Home;