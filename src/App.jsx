import React from "react";
import supabase from "./config/supabaseClient";
import Quote from "./components/quote";
import Create from "./components/create";
import Todolist from "./components/toDoList";
function App() {
  return (
    <>
      <div className=" bg-slate-400 flex flex-col  h-full">
        <div className=" bg-orange-300  h-40">
          <Quote />
        </div>

        <div className=" bg-slate-500  h-2/6">
          <Todolist />
        </div>
        <div>
          <div> <Create/></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
