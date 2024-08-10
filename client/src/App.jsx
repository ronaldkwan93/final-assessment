import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CareerSearch from "./pages/CareerSearch";
import SalariesSearch from "./pages/SalariesSearch";
import Universities from "./pages/Universities";
import UserHome from "./pages/UserHome";
import UpdateProfile from "./pages/UpdateProfile";
import About from "./pages/About";
import UserAbout from "./pages/UserAbout";

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
          <Route path="/updateProfile" element={<UpdateProfile />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/userabout" element={<UserAbout />} /> 

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
