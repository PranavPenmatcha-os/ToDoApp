import React, { useState } from 'react';
import { ArrowFatLinesUp, ArrowFatLinesDown, Backspace, CheckSquare } from 'phosphor-react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function toggleComplete(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index === 0) return;
    const updatedTasks = [...tasks];
    [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
    setTasks(updatedTasks);
  }

  function moveTaskDown(index) {
    if (index === tasks.length - 1) return;
    const updatedTasks = [...tasks];
    [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
    setTasks(updatedTasks);
  }

  return (
    <div className="page">
      <div className="to-do-list">
        <h1>Tasks</h1>
        <div className="input-container">
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
            placeholder="Add a new task"
          />
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <div className="task-content">
                <button
                  className={`check-button ${task.completed ? "checked" : ""}`}
                  onClick={() => toggleComplete(index)}
                >
                  {/* <CheckSquare size={24} weight={task.completed ? "fill" : "regular"} /> */}
                </button>
                <span className={`task-text ${task.completed ? "completed" : ""}`}>
                  {task.text}
                </span>
              </div>
              <div className="button-group">
                <button onClick={() => moveTaskUp(index)} title="Move Up">
                  <ArrowFatLinesUp size={24} />
                </button>
                <button onClick={() => moveTaskDown(index)} title="Move Down">
                  <ArrowFatLinesDown size={24} />
                </button>
                <button onClick={() => deleteTask(index)} title="Delete">
                  <Backspace size={24} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
