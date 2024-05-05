import React from "react";
import { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Finish React turorial", complete: true },
    { id: 2, name: "Go grocery shopping", complete: false },
    { id: 3, name: "Prepre dinner", complete: true },
    { id: 4, name: "Read a book", complete: false },
  ]);
  console.log(tasks);
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => {
          return (
            <li key={task.id}>
              {task.name} - {task.complete ? "Completed" : "Pending"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tasks;
