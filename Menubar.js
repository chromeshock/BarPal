import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => (

        <nav>
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/">About</Link></li>
                <li><Link to ="/">Search</Link></li>
            </ul>
        </nav>
    );

export default MenuBar;