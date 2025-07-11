import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar1, File, Home, User } from "lucide-react";

export default function UserSideBar() {
  return (
    <div className=" bg-[#ffffff] shadow-lg rounded-lg">
      <div className="min-w-[300px] flex items-center gap-3 px-3">
        <div className="pt-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1">
          <h2 className="text-md font-bold">Ram Bhadur Nepali</h2>
        </div>
      </div>
      {/* siderbar option */}
      <div className="mt-5 space-y-2">
        <div className="ml-2 flex items-center gap-3 px-3 hover:bg-zinc-200/60 cursor-pointer py-2 rounded-lg">
          <Home />
          <p className="font-semibold text-md">Dashboard</p>
        </div>
        <div className="ml-2 flex items-center gap-3 px-3 hover:bg-zinc-200/60 cursor-pointer py-2 rounded-lg">
          <User />
          <p className="font-semibold text-md">Profile</p>
        </div>
        <div className="ml-2 flex items-center gap-3 px-3 hover:bg-zinc-200/60 cursor-pointer py-2 rounded-lg">
          <Calendar1 />
          <p className="font-semibold text-md">Appointments</p>
        </div>
        <div className="ml-2 flex items-center gap-3 px-3 hover:bg-zinc-200/60 cursor-pointer py-2 rounded-lg">
          <File />
          <p className="font-semibold text-md">Records</p>
        </div>
        <div className="ml-2 flex items-center gap-3 px-3 hover:bg-zinc-200/60 cursor-pointer py-2 rounded-lg">
          <Calendar1 />
          <p className="font-semibold text-md">Insurance</p>
        </div>
        <div className="ml-2 flex items-center gap-3 px-3 hover:bg-zinc-200/60 cursor-pointer py-2 rounded-lg">
          <Calendar1 />
          <p className="font-semibold text-md">Help</p>
        </div>
      </div>
    </div>
  );
}
