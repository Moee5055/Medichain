import { Outlet } from "react-router";
import UserSideBar from "./components/UserSidebar";
import NavBar from "./components/NavComponent";

export default function Index() {
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-gray-50 pb-3">
      <NavBar />
      <div className="overflow-y-auto flex-1 flex w-full pt-2 px-2">
        <UserSideBar />
        <Outlet />
      </div>
    </div>
  );
}
