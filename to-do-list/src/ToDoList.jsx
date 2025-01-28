import React, {useState} from 'react';
function ToDoList(){

    const  [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState("");


    //This function handles when input has been put in the <input> text field
    function handleInputChange(event){
        // if this isn't included and we type in the text box
        // it won't be updated/change
        setNewTasks(event.target.value);
    }

    function addTask(){
        if(newTasks.trim() !== ""){
            //add new task to the list
        setTasks(t => [...t, newTasks]);
        //Once task has been added, clear the input field
        setNewTasks("");
        }
        
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i)=> i !== index);

        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

           <div>
            {/* this part handles the input text field for a task */}
            <input
            type="text"
            placeholder="Enter a Task..."
            value={newTasks}
            onChange={handleInputChange}/>
            <button className="add-button"
            onClick={addTask}>
                Add
            </button>
           </div>

            <ol>
                {tasks.map((task, index) =>
                <li key={index}>

                    <span className="text">
                        {task}
                    </span>
                    <button className="delete-button" 
                    onClick={() => deleteTask(index)}>
                        Delete</button>

                    <button className="move-button" 
                    onClick={() => moveTaskUp(index)}>
                        Up</button>

                    <button className="move-button" 
                    onClick={() => moveTaskDown(index)}>
                        Down</button>
                    </li>)}
            </ol>

        </div>
    );
}

export default ToDoList;