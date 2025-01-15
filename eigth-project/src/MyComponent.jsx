import React, {useState} from 'react';


function MyComponent(){
    //useState() returns an array of 2 elements [variable, setter]
    // if a parameter is entered in useState() that will show up in the variable, but will be changed once clicked
    const [name, setName] = useState("Guest");

    const [age, setAge] = useState(0);

    const [isEmployed, setIsEmployed] = useState(false);

    // sets the name to be tami
    const updateName = () => {
        setName("Tami");
    }

    //the function updateAge() increments the age, that starts from 0 but increments with each button click
    const updateAge = () => {
        setAge(age + 1);
    }

    const toggleEmployment = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            
            <p>Name: {name} </p>
            {/* when the button is clicked, it calls updateName which shows Tami */}
            <button onClick={updateName}> Set Name</button>

            <p>Age: {age}</p>
            {/* when button is clicked, it calls updateAge */}
            <button onClick={updateAge}> Increase age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No" }</p>
            {/* when button is clicked, it calls updateAge */}
            <button onClick={toggleEmployment}> Toggle status</button>

        </div>
    );
}

export default MyComponent;