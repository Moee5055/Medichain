import { Routes } from "react-router";
import { Route } from "react-router";
import Index from "./routes/Index";
import Dashboard from "./routes/dashborad/Dashboard";
import ProfilePage from "./routes/profile/ProfilePage";
import InsurancePage from "./routes/insurance/InsurancePage";
import AppointmentPage from "./routes/appointments/AppointmentPage";
import HelpPage from "./routes/help/HelpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="appointment" element={<AppointmentPage />} />
        <Route path="insurance" element={<InsurancePage />} />
        <Route path="help" element={<HelpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
