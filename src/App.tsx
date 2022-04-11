import React, {useState, useEffect} from 'react';
import './App.css';
import AddTask from './components/AddTask';
import ListTasks from './components/ListTasks';
import SaveTask from './components/SaveTask';
import { v4 as uuidv4 } from "uuid";

function App() {

  const [ taskList, setTaskList ] = useState<Task[]>([]);

  //useEffect
  useEffect(() => {
    loadTask()
  }, []);

  const addTask = (userInput: string) => {
    let copy = [...taskList];
    copy = [...copy, { id: uuidv4(), value: userInput}];
    setTaskList(copy);
    console.log("Add task successfully!");
  }

  const removeTask = (id : string) => {
    let filtered = taskList.filter(task => {
      return task.id !== id;
    });
    setTaskList(filtered);
    console.log("Remove task successfully!");
  }

  const saveTask = () => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
    console.log('Save tasks successfully!');
  }

  const loadTask = () => {
    var taskList = localStorage.getItem('taskList');   
    if(taskList != null)
    {
      var tasks = JSON.parse(taskList);
      setTaskList(tasks);
      console.log('Load tasks successfully!');
    }
  }

  return (
    <div className="containers">
      <AddTask addTask={addTask}></AddTask>
      <ListTasks taskList={taskList} removeTask={removeTask}></ListTasks>
      <SaveTask saveTask={saveTask} loadTask={loadTask}></SaveTask>
    </div>
  );
}

export type Task =
{
  id : string,
  value : string
};

export default App;
