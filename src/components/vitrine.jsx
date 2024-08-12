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

    allTasks.map((task) => console.log(task.tas));
  };

  return (
    <div className=" flex flex-col h-screen  bg-sky-900">
      <div className="">
        <button onClick={getAlltasks}>click here</button>
        <div>
              {allTasks.map(task => <li key={task.id}>{task.task_content} <strong>{task.is_done? 'Yes' : 'Non'}</strong> </li>)}

        </div>
      </div>
    </div>
  );
}
