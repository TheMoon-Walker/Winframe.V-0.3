import Dashbord from "./drawer";
import Todolist from "./toDoList";
import Quote from "./quote";
import Footer from "./footer";
function HomePage() {
//   <button
//   className="bg-blue-500 text-white px-4 py-2 rounded"
//   onClick={() => setIsDrawerOpen(!isDrawerOpen)}
// >
//   Toggle Drawer
// </button>

// <div
//   className={`fixed top-0 left-0 h-full bg-blue-100 p-6 shadow-lg transform transition-transform ${
//     isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
//   }`}
// >
  return (
    <>
      <div className="flex h-full  bg-zinc-300 flex-row">
        <div className='-translate-x-full md:translate-x-0  lg:translate-x-0'>
                  <Dashbord />
        </div>

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
