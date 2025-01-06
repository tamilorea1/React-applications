
function Food(){

    const food1 = "Orange";
    const food2 = "Banana";
    

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toLocaleUpperCase()}</li>
        </ul>
    );
}

export default Food;

// when trying to implement javascript in return(), you need {}
// but outside the return statement you don't need it