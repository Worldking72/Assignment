import React from "react";
import {MdDeleteSweep} from 'react-icons/md'

const TaskItem = ({ task, deletTask, togglecheck }) => {
    return(
    <li className="items">
        <div className="items-text">
            <input type="checkbox"
            checked={task.checked}
            onChange={() => togglecheck(task.
            taskName)} />
            <p> className={task.checked ? "checked" :
            ''} {">"} {task.taskName} </p>
        </div>
        <MdDeleteSweep
            className="delete-icons"
            onClick={deletTask(task.taskName)}
            />


    </li>
    );
};

export default TaskItem;