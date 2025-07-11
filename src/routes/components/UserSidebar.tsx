import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Shield,
  HeadphonesIcon,
} from "lucide-react";
import { NavLink } from "react-router";

const navigationItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Appointment", icon: Calendar, path: "/appointment" },
  { name: "Records", icon: FileText, path: "/records" },
  { name: "Insurance", icon: Shield, path: "/insurance" },
  { name: "Helpdesk", icon: HeadphonesIcon, path: "/help" },
];

export default function UserSideBar() {
  return (
    <div className=" bg-[#ffffff] shadow-lg rounded-lg">
      <div className="min-w-[300px] border-b border-gray-200 flex items-center gap-3 px-3 pb-3">
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
      <nav className="mt-6">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-6 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
