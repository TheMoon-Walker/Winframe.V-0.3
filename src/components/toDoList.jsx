import { useState } from "react";
import supabase from "../config/supabaseClient";
export default function Todolist() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleInputChange(event) {
    const value = event.target.value;
    setTask(value);
  }

  async function handleButtonClick() {
    if (task) {
      setTasks((prevTasks) => [...prevTasks, task]);
      setTask("");
      // eslint-disable-next-line no-unused-vars
      const { data, error } = await supabase
        .from("toDoList")
        .insert([{ task }]);
    } else {
      alert("Please enter a task!");
    }
  }
  
  async function logdata() {
    const { data } = await supabase.from("toDoList").select();
    console.log("les donnes :", data);
  }
  logdata();

  function handleDelete(index) {
    setTasks((prevTasks) => prevTasks.filter((_t, tIndex) => tIndex !== index));
  }


  async function handleDone(taskId) {
    const { error } = await supabase
      .from("toDoList")
      .update({ is_Done: true })
      .eq("id", taskId);

    if (error) {
      console.error(
        "Erreur lors de la mise à jour de la tâche : ",error,
        // error.message
      );
    } else {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, is_Done: true } : task
        )
      );
      alert(`Congratulations! You've completed 1 task out of ${tasks.length}.`);
    }
  }

  return (
    <div className=" flex   flex-col ">
      <div className="bg-gradient-to-r  from-slate-800 to-slate-400 ">
        <div className="text-lg mt-5 mb-6 text-slate-200 font-bold    p-2 flex justify-center items-center ">
          Todolist
        </div>
      </div>
      <div className="flex  items-center justify-center h-14 pt bg-slate-400 ">
        <form
          className="p-5 m-6  w-full  border-slate-900 rounded-2xl"
          onSubmit={(event) => {
            event.preventDefault();
            handleButtonClick();
          }}
        >
          <div className="flex  gap-2 items-center justify-between">
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
      <ul className="flex flex-col p-2 pb-1 h-72 overflow-auto ">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between mb-3 mt-3 p-3 h-12 rounded-lg border m-10 border-slate-300 hover:bg-slate-600 shadow-xl "
          >
            <span className="text-base text-slate-200 overflow-y-auto pl-8 font-medium">
              {task}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handleDone}
                className="px-3 py-2   rounded-lg bg-green-400 hover:bg-green-700 text-white font-medium"
              >
                Done
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-3 py-2  rounded-lg bg-red-500 hover:bg-red-700 text-white font-medium"
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
