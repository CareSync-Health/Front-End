// import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Navbar2 from "./Navbar2";
import BMICalculatorSettings from "./BMICalculatorSettings";

const PatientSettings = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div
        className="flex-1 lg:h-[99.9vh] xs:h-[85vh] overflow-y-auto bg-[#FFFCF8]"
        style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
      >
        <Navbar />
        <Navbar2 />
        <div className="md:px-[30px] lg:px-[30px] xs:px-2 mb-5 select-none">
          <Routes>
            <Route
              path="/bmi_calculator_setting"
              element={<BMICalculatorSettings />}
            />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default PatientSettings;
