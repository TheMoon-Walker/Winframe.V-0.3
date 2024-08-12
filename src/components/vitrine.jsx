import { useState } from "react";
import supabase from "../config/supabaseClient";
import { useEffect } from "react";

export default function Vitrine() {
  const [allTasks, setAllTasks] = useState([]);
 
  const getAlltasks = async () => {
    const { data, error } = await supabase.from("toDoList").select("*");
    
    if (error) {
      console.error("Error adding task:", error);
      return;
    }
    setAllTasks(data);
  
    allTasks.map(task => console.log(task.id))

  };

  return (
    <div className=" flex flex-col h-screen  bg-sky-900">
      <div className="">
     
        <button onClick={getAlltasks}>click here</button>
        <div><ul>
          {/* {allTasks.map(task => <li key={}>{task}</li>)} */}
          
          </ul></div>
      </div>
    </div>
  );
}
// import { useState } from "react";
// import supabase from "../config/supabaseClient";

// export default function Vitrine() {
//   const [allTasks, setAllTasks] = useState([]);
 
//   const getAlltasks = async () => {
//     const { data, error } = await supabase.from("toDoList").select("*");
    
//     if (error) {
//       console.error("Error fetching tasks:", error);
//       return;
//     }
//     setAllTasks(data);
//   };

//   return (
//     <div className="flex flex-col h-screen bg-sky-900">
//       <div className="bg-red-400 h-1/2">
//         <button onClick={getAlltasks}>Cliquez ici</button>
//       </div>
//       <div className="bg-green-600 h-1/2">
//         <ul>
//           {allTasks.map((task) => (
//             <li key={task.id}>
//               {/* Affichage des propriétés dynamiques */}
//               <strong>ID:</strong> {task.id}, 
//               <strong> Task:</strong> {task.task}, 
//               <strong> Done:</strong> {task.is_done ? "Yes" : "No"}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }
