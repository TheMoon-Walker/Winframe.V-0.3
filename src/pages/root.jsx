import Drawer from "../staticComponents/drawer";
import Footer from "../staticComponents/footer";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      <div className="flex h-screen">
        <Drawer />

        <div className=" w-screen flex-col ">
          <Outlet />   {/* contiendra les elements Children[] */}
          <Footer />
        </div>
      </div>
    </>
  );
}
