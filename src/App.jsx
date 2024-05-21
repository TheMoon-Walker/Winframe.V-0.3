import Quote from "./components/quote";
import Todolist from "./components/toDoList";
function App() {
  return (
    <>
      <div className="flex h-full bg-slate-300 flex-row">
        <div className="  bg-slate-400  h-full  m-4  shadow-2xl  w-40">

        <ul className="space-y-16">
            <li>
              <a href="#" className="block p-2 bg-blue-900 rounded hover:bg-red-200">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 bg-blue-100 rounded hover:bg-blue-200">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 bg-blue-100 rounded hover:bg-blue-200">
                Students
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 bg-blue-100 rounded hover:bg-blue-200">
                Teachers
              </a>
            </li>
            </ul>
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
      </div>
    </>
  );
}

export default App;
