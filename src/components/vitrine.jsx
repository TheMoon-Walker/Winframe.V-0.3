import { useState } from "react";
import supabase from "../config/supabaseClient";
import { data } from "autoprefixer";

export default function Vitrine() {
  const [allTasks, setAllTasks] = useState();

  const getAlltasks = async () => {
    const { data, error } = await supabase.from("toDoList").select("*");
    if (error) {
      console.error("Error adding task:", error);
      return;
    }
    setAllTasks(data);
    console.log(allTasks);
  };





  return (
    <div className=" flex flex-col h-screen  bg-sky-900">
      <div className=" bg-red-400 h-1/2">
        {" "}
        Taches a faire
        <button onClick={getAlltasks}>click here</button>
      </div>
      <div className=" bg-green-600 h-1/2"></div>
      <div>
      </div>
    </div>
  );
}
