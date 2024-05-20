import React, { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

export default function Todolist() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [formError, setFormError] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setTask(value);
  };

  const handleButtonClick = async (event) => {
    event.preventDefault();
    if (!task) {
      alert("Please enter a task!");
      return;
    }
    const { data, error } = await supabase
      .from('toDoList')
      .insert([{ task }]);  // Utiliser { task } pour correspondre au schéma de votre table

    if (error) {
      console.log(error);
      setFormError("Could not insert task");
    } else {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask("");
      setFormError("");
      console.log(data);
    }
  };

  const handleDelete = async (index) => {
    // Here you would normally delete from the database as well
    setTasks((prevTasks) => prevTasks.filter((_t, tIndex) => tIndex !== index));
  };

  const handleDone = () => {
    alert(`Congratulations! You've completed 1 task out of ${tasks.length}.`);
  };

  return (
    <div className="h-full flex flex-col ">
      <div className="bg-gradient-to-r from-slate-800 to-slate-400">
        <div className="text-lg mt-5 mb-6 text-slate-200 font-bold p-2 flex justify-center items-center">
          Todolist
        </div>
      </div>
      <div className="flex items-center justify-center h-14 pt bg-slate-400">
        <form
          className="p-5 m-6 w-full border-slate-900 rounded-2xl"
          onSubmit={handleButtonClick}
        >
          <div className="flex gap-2 items-center justify-between">
            <div className="flex-grow">
              <input
                className="w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
                value={task}
                onChange={handleInputChange}
                type="text"
                placeholder="Enter a task"
              />
            </div>
            <button
              type="submit"
              className="h-10 px-4 py-2 rounded-lg bg-slate-300 hover:bg-slate-400 text-white font-medium"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      {formError && <p className="text-red-500 font-bold mt-4">{formError}</p>}
      <ul className="flex flex-col p-2 pb-14 w-full h-3/4 overflow-y-auto flex-grow">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between mb-3 mt-3 p-3 h-12 rounded-lg border border-slate-300 hover:bg-slate-600 shadow-xl"
          >
            <span className="text-base text-slate-200 overflow-y-auto pl-8 font-medium">
              {task}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handleDone}
                className="px-3 py-2 rounded-lg bg-green-400 hover:bg-green-700 text-white font-medium"
              >
                Done
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-3 py-2 rounded-lg bg-red-500 hover:bg-red-700 text-white font-medium"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
