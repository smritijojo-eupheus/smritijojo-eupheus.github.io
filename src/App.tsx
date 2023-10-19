import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Website from "./pages/Website";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashBoard from "./pages/VendorDashBoard";
import GeoChart from "./components/Charts/GeoChart";
import Map from "./components/Map/Map";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/website" element={<Website />}></Route>
          <Route path="/account/register" element={<Register />}></Route>
          <Route path="/vendor/dashboard" element={<DashBoard />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
