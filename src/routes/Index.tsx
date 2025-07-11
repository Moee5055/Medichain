import { Outlet } from "react-router";
import UserSideBar from "./components/UserSidebar";

export default function Index() {
  return (
    <div className="bg-[#f6faff] min-h-screen w-full">
      {/* header  */}
      <nav>
        {/* logo */}
        {/* icon */}
      </nav>
      <div className="flex w-full pt-5">
        <UserSideBar />
        <Outlet />
      </div>
    </div>
  );
}
