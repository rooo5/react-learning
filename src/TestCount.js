import { useState } from 'react';

const TestCount = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(prev => prev + 1);
    }

    const handleDecrease = () => {
        setCount(prev => prev - 1);
    }

    const handleSetZero = () => {
        setCount(0);
    }

    return (
        <div className="App" >
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrese</button>
            <button onClick={handleSetZero}>Set Zero</button>
            <h1>{count}</h1>
        </div >
    );
}

export default TestCount;