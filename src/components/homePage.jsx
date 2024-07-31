//homepage.jsx

import Todolist_And_Quote from "./todolist_And_Quote";
import Drawer from "./Drawer";
import Footer from "./Footer";
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-300">
      <div className="flex flex-row flex-1">
        <Drawer />
        <Todolist_And_Quote />
      </div>
      <Footer />
    </div>
  );
}
