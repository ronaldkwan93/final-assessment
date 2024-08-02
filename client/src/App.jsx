import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CareerSearch from "./pages/CareerSearch";
import SalariesSearch from "./pages/SalariesSearch";
import Universities from "./pages/Universities";
import UserHome from "./pages/UserHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/careers" element={<CareerSearch />} />
          <Route path="/salaries" element={<SalariesSearch />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/member" element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
