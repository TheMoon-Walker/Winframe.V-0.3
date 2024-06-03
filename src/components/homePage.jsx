import Drawer from './drawer';
import Todolist from './toDoList';
import Quote from './quote';
import Footer from './footer';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-300">
      <div className="flex flex-row flex-1">
        <div className="hidden md:block lg:block">
      <Drawer />
        </div>

        <div className="flex flex-col flex-1 bg-slate-400">
          <div className="bg-orange-300 lg:h-32 h-40">
            <Quote />
          </div>

          <div className="bg-slate-500 flex-1">
            <Todolist />
          </div>
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white text-center py-4 w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
