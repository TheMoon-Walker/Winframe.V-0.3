import Dashbord from "./dashbord";
import Todolist from "./toDoList";
import Quote from "./quote";
import Footer from "./footer";
function HomePage() {
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

export default HomePage;
