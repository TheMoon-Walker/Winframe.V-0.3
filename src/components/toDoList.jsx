import { useState } from "react";
import supabase from "../config/supabaseClient.jsx";
export default function Todolist() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [doneTasks,setDoneTasks] = useState([])

  function handleInputChange({ target }) {
    setTask(target.value);
  }

  async function handleAddTask(event) {
    event.preventDefault();
    if (task.trim()) {
      const { data, error } = await supabase
        .from("toDoList")
        .insert([{ task_content: task }])
        .select("*");
      if (error) {
        console.error("Error adding task:", error);
        return;
      }
      const newTask = data[0];
      console.log(data[0]);
      console.log(task);
      console.log(tasks);
      setTasks([...tasks, newTask]);
      setTask("");
    } else {
      alert("Please enter a task!");
    }
  }

  function handleDone(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));

  }

  async function handleDelete(taskId) {
    try {
      // Supprime la tâche de la base de données Supabase
      const { error } = await supabase
        .from("toDoList")
        .delete()
        .eq("id", taskId);

      if (error) {
        console.error("Error deleting task:", error);
        return;
      }

      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Unexpected error deleting task:", error);
    }
  }

  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-r from-slate-800 to-slate-400">
        <div className="text-lg mt-5 mb-6 text-slate-200 font-bold p-2 flex justify-center items-center">
          Todolist
        </div>
      </div>
      <div className="flex items-center justify-center h-14 pt bg-slate-400">
        <form
          className="p-5 m-6 w-full border-slate-900 rounded-2xl"
          onSubmit={handleAddTask}
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
      <ul className="flex flex-col p-2 pb-1 h-72 overflow-auto">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between mb-3 mt-3 p-3 h-12 rounded-lg border m-10 border-slate-300 bg-slate-600 hover:bg-slate-700 shadow-xl "
          >
            <span
              className={`text-base text-slate-200 overflow-x-auto pl-8 font-medium  ${
                task.done ? "line-through" : ""
              }`}
            >
              {task.task_content}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handleDone(task.id)}
                className="px-3 py-2 rounded-lg bg-green-400 hover:bg-green-700 text-white font-medium"
              >
                {task.done ? "Undone" : "Done"}
              </button>
              <button
                onClick={() => handleDelete(task.id)}
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

//new chalenge : savoir pour quoi il y 'a autant de latence
//maintenant que le probleme des Rls est resolu , je peut juste recuperer tout les anciennes taches fait trier par date dans une nouvelle page accessible avec react rooter (la deuxieme page de mon site)
