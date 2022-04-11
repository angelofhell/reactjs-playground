import React, {useState, useEffect} from 'react';
import './App.css';
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';
import tasks from './data.json';
import { v4 as uuidv4 } from "uuid";

function App() {

  const [ taskList, setTaskList ] = useState<Task[]>(tasks);

  const addTask = (userInput: string) => {
    let copy = [...taskList];
    copy = [...copy, { id: uuidv4(), value: userInput}];
    setTaskList(copy);
  }

  const removeTask = (id : string) => {
    let filtered = taskList.filter(task => {
      return task.id !== id;
    });
    setTaskList(filtered);
  }

  return (
    <div className="containers">
      <AddTask addTask={addTask}></AddTask>
      <ListTasks taskList={taskList} removeTask={removeTask}></ListTasks>
    </div>
  );
}

export type Task =
{
  id : string,
  value : string
};

export default App;
