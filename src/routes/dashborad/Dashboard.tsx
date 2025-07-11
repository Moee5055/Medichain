import UserInformation from "../UserInformation";

export default function Dashboard() {
  return (
    <main className="flex-1 py-2">
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
    </main>
  );
}
