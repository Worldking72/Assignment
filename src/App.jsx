import { useState } from "react";
import { TaskItem} from "react";
import { setToDoList} from "react";
import { toDoList} from "react";
import { addTask} from "react";
import { deletTask} from "react";
import TaskInput from "./components/Taskinput";


function App() {
  const[toDoList,setToDoList] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName  , checked: false };
    setToDoList([...toDoList, newTask])
  };

  function deleteTask(deletTaskName) {
    setToDoList(toDoList.filter((task) => task.
    taskName !== deletTaskName));
  }
}

  function togglecheck(taskName){
    setToDoList((prevToDoList) =>
    prevToDoList.map((task) =>
      task.taskName === taskName ? {...task,
    checked: !task.checked }: task,
    )
  );


  console.log(toDoList);
  return (
    <>
      <div className="container">
        <h1>Task Master</h1>

        <TaskInput addTask={addTask} />


        <div className="toDoList">
            <span>To Do</span>
            <ul className="list-items">
            {toDoList.map((task, key) => (
            <TaskItem task={task} key={key}
            deletTask={deletTask }
            togglecheck={togglecheck}
            />
            ))}
            </ul>

            {toDoList.length === 0 ? (
              <p className="notify">you are done!</p>
            ) : null}

      </div>
      </div>
      <stats toDoList={toDoList}/>
    </>
  );
}

export default App;
