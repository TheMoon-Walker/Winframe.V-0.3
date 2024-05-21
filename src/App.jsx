import Quote from "./components/quote";
import Todolist from "./components/toDoList";
function App() {
  return (
    <>
   <div className=" flex-row">
   <div className=" bg-red-500 h-14"></div>

   </div>
      <div className=" bg-slate-400 flex flex-col  h-full">
        
        <div className=" bg-orange-300 lg:h-32 h-40">
          <Quote />
        </div>

        <div className=" bg-slate-500  h-2/6">
          <Todolist />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
