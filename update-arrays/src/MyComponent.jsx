import React, {useState} from 'react';

function MyComponent(){

    //State to store the list of foods, starting with 3 items (Apple, Orange, Banana)
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    //function to add a new food to the list
    function handleAddFood(){
        
        //Get the value enetered in the input field
        const newFood = document.getElementById("foodInput").value;

        //clear the input field after value has been gotten
        document.getElementById("foodInput").value = "";

        //Add the new food to the list using setFoods
        //...f contains the original 3 items
        setFoods(f => [...f, newFood]);
    }

    //function to remove food from the list by index
    function handleRemoveFood(index){
        //Create a new list without the clicked item
        //when item is clicked, it should be removed
        setFoods(foods.filter((_, i) => i !== index ));

    }


    return(
    <div>
        <h2> List of Food</h2>
        <ul>
            {/* Display the list of foods, each item is clickable to remove it */}
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
        </ul>

        {/* Input field to enter a new food */}
        <input type="text" id="foodInput" placeholder="Enter food name"></input>
        {/* Button to add the entered food to the list */}
        <button onClick={handleAddFood}> Add Food</button>
    </div>
    );
}

export default MyComponent;