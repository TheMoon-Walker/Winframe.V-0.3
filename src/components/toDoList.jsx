import { useState } from "react";
import supabase from "../config/supabaseClient";
export default function Todolist() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [is_Done, setIs_Done] = useState(false);

  // function handleInputChange(event) {
  //   const value = event.target.value;
  //   setTask(value);
  //   console.log(value);
  // }
  function handleInputChange({ target }) {
    const { value } = target;
    setTask(value);
  }

  // async function handleButtonClick() {
  //   if (task) {
  //     setTasks((prevTasks) => [...prevTasks, task]);
  //     setTask("");
  //     // eslint-disable-next-line no-unused-vars
  //     const { data, error } = await supabase
  //       .from("toDoList")
  //       .insert([{ task }]);
  //   } else {
  //     alert("Please enter a task!");
  //   }
  // }

  async function handleButtonClick() {
    if (task) {
      const { data, error } = await supabase
        .from("toDoList")
        .insert([{ task }]);
      console.log(data);
      if (error) console.error(error);
      else setTasks([...tasks, data[0]]);
      //??
      setTask("");
    } else {
      alert("Please enter a task!");
    }
  }
  // insère une nouvelle tâche dans la table “toDoList” de Supabase si task n’est
  //  pas vide. Elle met également à jour l’état tasks avec la nouvelle tâche.

  // async function handleButtonClick(){
  //   if(task) {
  //     let {data : tasks}
  //   }
  // }

  async function handleDelete(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    console.log("task", taskId, "is deleted");
    console.log(tasks);
    const { error } = await supabase.from("toDoList").delete().eq("id", taskId);
    if (error) {
      console.error(error);
    }
  }

  // eslint-disable-next-line no-unused-vars
  async function handleDone(taskId) {
    setTasks(
      (prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, is_Done: true } : task
        ),
      setIs_Done(!is_Done),
      console.log(taskId, is_Done)
      //j'ai toujours le meme probleme , le style en bas est generalisé
    );
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
          // <li
          //   key={index}
          //   className="flex items-center justify-between mb-3 mt-3 p-3 h-12 rounded-lg border m-10 border-slate-300 hover:bg-slate-600 shadow-xl "
          // >
          <li
            key={index}
            className={`flex items-center justify-between mb-3 mt-3 p-3 h-12 rounded-lg border m-10 border-slate-300 hover:bg-slate-600 shadow-xl ${
              is_Done ? "bg-slate-200 text-slate-700" : "" // Apply styles for completed tasks
            }`}
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

// import { useState, useEffect } from "react";
// import supabase from "../config/supabaseClient";

// export default function Todolist() {
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   async function fetchTasks() {
//     const { data, error } = await supabase.from("toDoList").select("*");
//     if (error) console.error(error);
//     else setTasks(data);
//   }

//   function handleInputChange(event) {
//     const value = event.target.value;
//     setTask(value);
//   }

//   async function handleButtonClick() {
//     if (task) {
//       const { data, error } = await supabase
//         .from("toDoList")
//         .insert([{ task, is_Done: false }]);
//       if (error) console.error(error);
//       else setTasks([...tasks, data[0]]);
//       setTask("");
//     } else {
//       alert("Please enter a task!");
//     }
//   }

//   async function handleDelete(taskId) {
//     const { error } = await supabase.from("toDoList").delete().eq("id", taskId);
//     if (error) console.error(error);
//     else setTasks(tasks.filter((task) => task.id !== taskId));
//   }

//   async function handleDone(taskId) {
//     const { data, error } = await supabase
//       .from("toDoList")
//       .update({ is_Done: true })
//       .eq("id", taskId);
//     if (error) console.error(error);
//     else setTasks(tasks.map((task) => (task.id === taskId ? data[0] : task)));
//   }

//   return (
//     // ... Rest of your component
//   );
// }
