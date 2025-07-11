import { Bell, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function NavBar() {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  return (
    <div>
      <nav className="bg-[#FFFFFF] shadow-lg px-3 flex justify-between items-center pr-9">
        <div className="h-15 w-15">
          <img src="/Logo1.png" alt="website-logo" />
        </div>
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="secondary"
                  className="cursor-pointer flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{selectedLanguage}</span>
                  <ChevronDown className="w-4 h-4" />
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
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:bg-gray-50 rounded-md transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}
