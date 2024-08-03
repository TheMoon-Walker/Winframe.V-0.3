import Drawer from "./drawer";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      <div className="" >
        <Drawer />

        <div className=" flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
