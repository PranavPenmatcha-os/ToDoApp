import React, { useState } from 'react';

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
        <h1>To-Do List</h1>
        <div className="input-container">
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter a task"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div className={`task-row ${task.completed ? "completed" : ""}`}>
                <span>{task.text}</span>
                <div className="button-group">
                  <button onClick={() => toggleComplete(index)}>✅</button>
                  <button onClick={() => moveTaskUp(index)}>⬆️</button>
                  <button onClick={() => moveTaskDown(index)}>⬇️</button>
                  <button onClick={() => deleteTask(index)}>🗑️</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
