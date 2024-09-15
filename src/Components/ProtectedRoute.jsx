import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getDoctorKYCStatus, getDoctorStatus, getUserRole, loadDoctor } from "@/Redux/Actions/DoctorActions";
import { useDispatch, useSelector } from "react-redux";

// For doctors
const DoctorPrivateRoute = () => {
    const dispatch = useDispatch();
    const role = getUserRole();
    const { status } = useSelector((state) => state.getDoctorStatus);
    const doctor = useSelector((state) => state.loadDoctor.doctor);
    const { KYCStatus } = useSelector((state) => state.doctorKYCStatus);
    const doctorId = doctor?._id;

    useEffect(() => {
        if (role === "doctor") {
            dispatch(loadDoctor());
            if (doctorId) {
                dispatch(getDoctorStatus(doctorId))
                dispatch(getDoctorKYCStatus(doctorId))
            }
        }
    }, [dispatch, role, doctorId]);

    if (role !== "doctor") {
        return <Navigate to="/unauthorized" />;
    }

    if (KYCStatus === "rejected") {
        return <Navigate to="/KYC-Security" />;
    }

    if (status === "Blocked") {
        return <Navigate to="/blocked" />;
    }

    if (status === "Terminated") {
        return <Navigate to="/terminated" />;
    }

    return <Outlet />;
};

// For patients
const PatientPrivateRoute = () => {
    const role = getUserRole();
    return role === "patient" ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export { DoctorPrivateRoute, PatientPrivateRoute };