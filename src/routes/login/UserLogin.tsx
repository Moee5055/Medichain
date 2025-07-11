import LoginComponent from "../components/LoginComponent";
import NavBar from "../components/NavComponent";

export default function UserLogin() {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="pt-20 max-w-md mx-auto">
        <div className="flex justify-center">
          <img src="Logo1.png" className="w-40 h-40  rounded-full" />
        </div>
        <LoginComponent />
      </div>
    </div>
  );
}
