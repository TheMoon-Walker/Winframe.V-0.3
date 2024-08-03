import Drawer from "./drawer";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      <div className="flex h-screen" >
        <Drawer />

        <div className=" w-screen flex-col ">
          <Outlet />
<Footer />
        </div>

        
      </div>
    </>
  );
}
