import PropTypes from 'prop-types'


function List(props){

    // const fruits = [{id: 1 , name: "apple", calories: 95}, 
    //                 {id: 2 ,name: "orange", calories:45 }, 
    //                 {id: 3 ,name: "banana", calories:105 }, 
    //                 {id: 4 ,name: "coconut", calories:159 }, 
    //                 {id: 5 ,name: "pineapple", calories:37}];
    
    //puts list alphabetically
    // fruits.sort((a, b) => a.name.localeCompare(b.name));

    // reverse alphabetically
    // fruits.sort((a, b) => b.name.localeCompare(a.name));    

    //sorts list based on calories. Least to highest
    // fruits.sort((a,b) => a.calories - b.calories);

    //sorts list based on calories. highest to least
    // fruits.sort((a,b) => b.calories - a.calories);    

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    // Only prints out fruits that are low calorie 
    // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
    //                                               {lowCalFruit.name}: &nbsp;
    //                                               <b>{lowCalFruit.calories}</b></li>);  

    // Only prints out fruits that are high calorie 
    // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
    //     {highCalFruit.name}: &nbsp;
    //     <b>{highCalFruit.calories}</b></li>); 
    
    // prints out corresponding fruit names with their calories
    // const listItems = fruits.map(fruit => <li key={fruit.id}>
    //     {fruit.name}: &nbsp;
    //     <b>{fruit.calories}</b></li>);

    //using props to get the list of fruits from the App component
    const itemList = props.items;

    const category = props.category;

    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calories}</b></li>);

    

    return(<>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
        </>);
}


List.defaultProps ={
    category : "Category",
    items: [],
}

List.propTypes ={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}
export default List;

//to make a string an object, give it {}
