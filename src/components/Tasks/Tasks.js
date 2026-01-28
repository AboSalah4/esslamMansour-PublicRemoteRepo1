import { useState } from "react";
import uuid from "react-uuid";
import Task from "./Task/Task";

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: uuid(), description: "Walk the dog", done: true },
    { id: uuid(), description: "Wash the car", done: false },
    { id: uuid(), description: "Finish the lab", done: false },
  ]);

  const handleClearTasks = () => {
    setTasks([]);
  };

  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    setTasks(updatedTasks);
  };

  const handleTaskRemove = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <>
      <h2>These are the tasks:</h2>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onStatusChange={handleStatusChange}
          onTaskRemove={handleTaskRemove}
        />
      ))}
      <button onClick={handleClearTasks}>Clear Tasks</button>
    </>
  );
}

export default Tasks;
