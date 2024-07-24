// import React from 'react'
import Sidebar from "../Components/Sidebar";
import { Routes, Route } from "react-router-dom";
import PatientPayment from "./PatientPayment";
import PatientProfile from "./PatientProfile";
import PatientSecurity from "./PatientSecurity";
import Navbar2 from "./Navbar";
import Navbar from "../Components/Navbar";
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
        <div>
          <Routes>
            <Route path="patient_profile" element={<PatientProfile />} />
            <Route path="patient_payment" element={<PatientPayment />} />
            <Route path="patient_security" element={<PatientSecurity />} />
            <Route path="patient_BmiCalculator" element={<BMICalculatorSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default PatientSettings;
