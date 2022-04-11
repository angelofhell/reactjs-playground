import React from 'react';
import { Task } from '../App';

type Props = {
    taskList : Array<Task>,
    removeTask: any
};

 export const ListTasks = (props : Props) => {
    return (
        <div>
            {props.taskList.map((task: Task) => {
                return(
                    <li className="taskItem">
                        {task.value}    
                        <button onClick={() => props.removeTask(task.id)}>X</button>
                    </li>
                );
            })}    
        </div>
    );
}

export default ListTasks;