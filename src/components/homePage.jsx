import Drawer from "./drawer";

import Footer from "./footer";
import Todolist_And_Quote from "./todolist_And_Quote";


function HomePage() {
  return (
    
    <div className="flex flex-col min-h-screen bg-zinc-300">
      <div className="flex flex-row flex-1">
          <Drawer />


      <Todolist_And_Quote/>
      </div>

        <Footer />
    </div>
  );
}

export default HomePage;
