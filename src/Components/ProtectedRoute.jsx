import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getUserRole } from "@/Redux/Actions/DoctorActions"; // The helper function to get the role

// For doctors
const DoctorPrivateRoute = () => {
    const role = getUserRole();
    return role === "doctor" ? <Outlet /> : <Navigate to="/unauthorized" />;
};

// For patients
const PatientPrivateRoute = () => {
    const role = getUserRole();
    return role === "patient" ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export { DoctorPrivateRoute, PatientPrivateRoute };