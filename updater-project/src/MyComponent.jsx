import React, {useState} from 'react';


function MyComponent(){
    const [count, setCount] = useState(0);
    

    //updater functions setVariable(arrow function)
    // use first letter of "x" in const [x, y] as the arrow function
        const increment = () => {
            setCount(c => c + 1)
            setCount(c => c + 1)

        }
    
        const decrement = () => {
            setCount(c => c - 1)
            setCount(c => c - 1)

        }
    
        const reset = () => {
            setCount(0)
        }
    
        return(
            <div className="container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decrement}>Decrement</button>
                <button className="counter-button" onClick={reset}>Reset</button>
                <button className="counter-button" onClick={increment}>Increment</button>
            </div>
        );
}

export default MyComponent; 