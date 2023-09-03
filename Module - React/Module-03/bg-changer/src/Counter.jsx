import React, { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <button onClick={ () => setCount(count => count - 1)} style={{ marginRight: 10 }}> - </button>
                <span id="center">{count}</span>
                <button onClick={ () => setCount(count => count + 1)} style={{ marginLeft: 10 }}> + </button>
            </div>
        </>
    )
}

export default Counter
