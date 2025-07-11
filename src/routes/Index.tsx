import { Outlet } from "react-router";
import UserSideBar from "./components/UserSidebar";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f6faff] pb-3">
      {/* header  */}
      <div>
        <nav className="bg-[#FFFFFF] shadow-lg px-3 flex justify-between items-center pr-9">
          <div className="h-15 w-15">
            <img src="/Logo1.png" alt="website-logo" />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="cursor-pointer">
                <Globe className="stroke-slate-500 cursor-pointer" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <p>English</p>
                  <Separator />
                  <p>Nepali</p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </nav>
      </div>
      <div className="flex-1 flex w-full pt-2 px-2">
        <UserSideBar />
        <Outlet />
      </div>
    </div>
  );
}
