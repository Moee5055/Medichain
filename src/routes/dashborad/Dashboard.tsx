import { Card, CardContent } from "@/components/ui/card";
import UserInformation from "../UserInformation";
import { DailyTips } from "../components/DailyTips";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <main className="flex-1 py-2 overflow-y-auto">
      <div className=" w-full px-5 gap-5 pt-3">
        <div className="flex">
          <div className="w-full shadow-xl py-5 px-5 bg-[#ffffff] rounded-lg">
            <h2>
              <span className="text-2xl font-extrabold">Hello, </span>
              <span className="font-bold  text-2xl text-yellow-400">
                Ram Bahadur
              </span>
            </h2>
            <p className="mt-3 text-gray-600">
              Have a nice data and don't forget to take care
            </p>
            <span className="text-gray-600">of your health</span>
          </div>
        </div>
      </div>
      <UserInformation />
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div className="space-y-3">
            <h2 className="px-6 ml-3 font-bold text-xl">Daily Health Tips</h2>
            <DailyTips />
          </div>
          <div className="mt-5">
            {/* health aler */}
            <h2 className="px-6 ml-3 font-bold text-xl mb-3">Health Alert</h2>
            <Card className="max-w-lg ml-14">
              <CardContent>
                <h2 className="font-semibold text-md mb-3">
                  ⚠<span className="font-bold"> Attention :</span> Dengue cases
                  are rising this monsoon.
                </h2>
                <p className="line-clamp-3 mb-3">
                  Dengue cases are rising this monsoon. Transmitted by Aedes
                  mosquitoes, dengue causes high fever, joint pain, and fatigue.
                  Use mosquito repellents, wear protective clothing, and sleep
                  under nets. Eliminate breeding sites — don’t let water collect
                  around your home. Clean surroundings save lives. Stay
                  protected, stay healthy, let's prevent dengue together.
                </p>
                <Button variant="secondary">Read more</Button>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* map */}
        <div className="w-[26rem] pt-7 pl-2 relative">
          <img src="./map.png" className="w-[420px] h-[400px]" />
          <Button
            className="absolute top-9 right-4 cursor-pointer"
            variant="secondary"
          >
            <a href="https://www.google.com/maps/search/nearest+hospital/@27.6910898,85.3478513,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D">
              Open map
            </a>
          </Button>
        </div>
      </div>
    </main>
  );
}
