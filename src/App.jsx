import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Loginpage";
import Success from "./Pages/Successpage";
import Home from "./Pages/Homepage";
import ProtectRoutes from "./Components/ProtectRoutes";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectRoutes><Home /></ProtectRoutes>} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
