import LoginComponent from "../components/LoginComponent";
import NavBar from "../components/NavComponent";

export default function UserLogin() {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="pt-20 max-w-md mx-auto">
        <div className="w-full flex items-center justify-center">
          <div className="w-48 h-48">
            <img
              src="logoo.png"
              className="w-full h-full rounded-full object-contain"
              alt="Logo"
            />
          </div>
        </div>
        <LoginComponent />
      </div>
    </div>
  );
}
