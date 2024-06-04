import Drawer from "./drawer";

import Footer from "./footer";
import Todolist_And_Quote from "./todolist_And_Quote";

// const [xComponent,setXComponent] = useState()
// function handleClick(){

//   return 

// }
function HomePage() {
  return (
    
    <div className="flex flex-col min-h-screen bg-zinc-300">
      <div className="flex flex-row flex-1">
        <div className="hidden md:block lg:block">
          <Drawer />
        </div>

      <Todolist_And_Quote/>
      </div>

      <footer className="bg-gray-800 text-white text-center py-4 w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
