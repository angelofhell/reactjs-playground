import React, {useState} from 'react';

type AddTaskProp = 
{
    addTask: any
}

const AddTask = (taskProps: AddTaskProp) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChanged = (e: any) => {
        setUserInput(e.currentTarget.value)
    }

    const handleAddTask = (e: any) =>{
        e.preventDefault();
        console.log(userInput);
        taskProps.addTask(userInput);
        setUserInput("");
        console.log("Add success!");
    }

    return (
        <div>
            <input type='text' value={userInput} onChange={(e) => handleChanged(e)}></input>
            <button id='btnAddTask' onClick={(e) => handleAddTask(e)}>Add Todo</button>
        </div>
    );
}

export default AddTask;
