import Dashbord from "./components/dashbord";
import Quote from "./components/quote";
import Todolist from "./components/toDoList";
import Footer from "./components/footer";
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
      <footer className="bg-gray-800 text-white text-center py-4 w-full  bottom-0">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
