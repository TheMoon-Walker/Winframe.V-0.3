import Dashbord from "./components/dashbord";
import Quote from "./components/quote";
import Todolist from "./components/toDoList";
function App() {
  return (
    <>
      <div className="flex h-full  bg-zinc-300 flex-row">
        <Dashbord />
        <div className=" bg-slate-400 flex flex-col w-full  h-full">
          <div className=" bg-orange-300 lg:h-32  h-40">
            <Quote />
          </div>

          <div className=" bg-slate-500 w-full  h-2/6">
            <Todolist />
          </div>
         
        </div>
       
      </div>
      <footer className="bg-gray-800 text-white text-center py-4 w-full fixed bottom-0">
      <p className="text-sm">
        Made with <span className="text-red-500">❤️</span> in Sebikotane by a lazy junior dev
      </p>
    </footer>

    </>
  );
}

export default App;
