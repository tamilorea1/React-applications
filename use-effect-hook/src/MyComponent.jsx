import React, {useState, useEffect} from "react";

function MyComponent(){

    const [count, setCount] = useState(0); // initial state of count is 0
    const [color, setColor] = useState("green");
    
    // useEffect(() => {
    //     document.title = `Count: ${count}`; //changes the title of the website (not Count text) as button is clicked
    // });

    // useEffect(() => {
    //     document.title = `My Counter Program`; //changes the title of the website but is not affected when button is clicked
    // }, []);

    useEffect(() => {
        document.title = `Count: ${count} ${color}`; //does this line only when [count] updates. It's similar to top useEffect, and also adds the color
    }, [count, color]);


    function handleAddButton(){
        setCount(c => c + 1); // adds one to the count every time the button is clicked
    }

    function MinusButton(){
        setCount(c => c - 1); // adds one to the count every time the button is clicked
    }


    function changeColor(){
        setColor(c => c == "green" ? "red" : "green"); // is count's color green? if yes change it to red, otherwise keep it green
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p> {/* displays the count and changes the color of the text */}
        {/* runs the handleAddButton function when add is clicked */}
        <button onClick={handleAddButton}>Add</button>
        <button onClick={MinusButton}>Subtract</button><br/>
        <button onClick={changeColor}>Change Color</button><br/>
        </>
    );

}

export default MyComponent;