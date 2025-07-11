import { SprayCan, ThermometerSun } from "lucide-react";

export default function Dashboard() {
  return (
    <main className="flex-1 py-2">
      <div className=" w-full px-5 gap-5 py-3">
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
        <div className="">
          <div className="shadow-xl p-7 bg-[#ffffff] rounded-lg">
            <h2 className="text-xl font-extrabold">Personal Information</h2>
            <div className="flex flex-col gap-2 mt-3 pr-10">
              <div className="flex justify-between">
                <p>Name: Ram Bahadur Nepali</p>
                <p>Age: 21</p>
              </div>
              <div className="flex justify-between">
                <span>Blood Group: B+</span>
                <span>Height: 170cm</span>
              </div>
              <span>Weight: 62kg</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="w-[200px] shadow-xl py-7 px-5 bg-[#ffffff] rounded-lg">
          <h2 className="text-xl font-extrabold">Temperature</h2>
          <div className="flex gap-2 items-center mt-3">
            <ThermometerSun />
            <span>32.6 °C</span>
          </div>
        </div>
        <div className="w-[200px] shadow-xl py-7 px-5 bg-[#ffffff] rounded-lg">
          <h2 className="text-xl font-extrabold">Humidity</h2>
          <div className="flex gap-2 items-center mt-3">
            <span></span>
          </div>
        </div>
        <div className="w-[200px] shadow-xl py-7 px-5 bg-[#ffffff] rounded-lg">
          <h2 className="text-xl font-extrabold">Air Quality</h2>
          <div className="flex gap-2 items-center mt-3">
            <SprayCan />
            <span>11 µg/m³</span>
          </div>
        </div>
      </div>
    </main>
  );
}
