import Dashbord from "./components/dashbord";
import Quote from "./components/quote";
import Todolist from "./components/toDoList";
// import Dashbord from "./components/dashbord";
function App() {
  return (
    <>
      <div className="flex h-full bg-slate-300 flex-row">
        <Dashbord />
        <div className=" bg-slate-400 flex flex-col w-full  h-full">
          <div className=" bg-orange-300 lg:h-32 h-40">
            <Quote />
          </div>

          <div className=" bg-slate-500 w-full  h-2/6">
            <Todolist />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
