import React, { useState } from "react";
import './Counter.css';
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
                <h1 id="title"> React Web</h1>
            <div>
                <button id="minus" onClick={() => setCount(count => count - 1)} style={{ marginRight: 10 }}> - </button>
                <span id="center">{count}</span>
                <button id="plus" onClick={() => setCount(count => count + 1)} style={{ marginLeft: 10 }}> + </button>
            </div>
        </>
    )
}

export default Counter
