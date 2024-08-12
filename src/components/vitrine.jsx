// import { useState } from "react";
// import supabase from "../config/supabaseClient";
// import { useEffect } from "react";

// export default function Vitrine() {
//   const [allTasks, setAllTasks] = useState([]);

//   useEffect( ()=>{
//       const getAlltasks = async () => {
//     const { data, error } = await supabase.from("toDoList").select("*");

//     if (error) {
//       console.error("Error adding task:", error);
//       return;
//     }
//     setAllTasks(data);

//     allTasks.map((task) => console.log(task.tas));
//   };
//   getAlltasks()
//   },[])


//   return (
//     <div className=" flex flex-col h-screen  bg-sky-900">
//       <div className="">
//         <ul className="flex flex-col p-8 h-screen   overflow-scroll ">

//               {allTasks.map(task => <li key={task.id}>{task.task_content} <strong>{task.is_done? 'Yes' : 'Non'}</strong>  <strong>{task.created_at}</strong></li>)}

//         </ul>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import supabase from "../config/supabaseClient";
import { useEffect } from "react";

export default function Vitrine() {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const getAlltasks = async () => {
      const { data, error } = await supabase.from("toDoList").select("*");

      if (error) {
        console.error("Error adding task:", error);
        return;
      }
      setAllTasks(data);
    };
    getAlltasks();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-sky-900">
      <div className="container mx-auto px-4">
        <ul className="flex flex-col p-8 bg-white rounded-lg shadow-md overflow-scroll h-screen">
          {allTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between py-2 hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              <div className="text-lg font-medium w-full">
                {task.task_content}
              </div>
              <div className="flex items-center space-x-2">
                <strong className={`${task.is_done ? 'text-green-500' : 'text-red-500'}`}>
                  {task.is_done ? 'Yes' : 'Non'}
                </strong>
                <span className="text-gray-500 hidden sm:block">
                  Created: {new Date(task.created_at).toLocaleDateString()}
                </span>
                <span className="text-gray-500 tooltip sm:hidden">
                  <span className="tooltip-content absolute invisible whitespace-nowrap px-2 py-1 rounded-md bg-opacity-70 bg-gray-800 text-white transition-all duration-300 ease-in-out transform translate-y-4">
                    Created: {new Date(task.created_at).toLocaleDateString()}
                  </span>
                  <svg
                    className="fill-current h-4 w-4 hover:text-sky-500"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.43333 10.56667C7.97 10.56667 7.56667 10.16667 7.56667 9.6A1 1 0 0 1 8.43333 9L11.56667 5.43333C12.03 5.03 12.03 4.46667 11.56667 4A1 1 0 0 1 11 4.43333L8.43333 10.56667Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
