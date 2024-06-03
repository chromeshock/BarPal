import React, { useState } from "react";


const Finder = () => {
    const [zipcode, setZipcode] = useState("");
    return (
        <form className="input">
            <label>Enter your Zipcode
                <input type="text" >
                </input>
            </label>
            <button type="submit" className="submit-size">Submit</button>
        </form>
        )
}

export default Finder;