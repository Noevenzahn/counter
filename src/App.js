import React, { useState } from "react";

import "./App.css";

function App() {

    const [count, setCount] = useState(0);

    const random = () => {
        setCount(Math.floor(Math.random() * 99))
    };

    return (
        <div className="counter">
            <p className="number">{count}</p>
            <div className="button-group">
                <button 
                    className="button adjust-button" 
                    onClick={() => setCount(count - 1)}>
                -</button>
                <button 
                    className="button" 
                    onClick={random}>
                random</button>
                <button 
                    className="button adjust-button" 
                    onClick={() => setCount(count + 1)}>
                +</button>
            </div>
            <button 
                className="button secondary-button" 
                onClick={() => setCount(0)}>
            clear</button>
        </div>
    )


}


export default App;

// random number 
// + 10, +100, +1000 usw