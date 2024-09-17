import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getDoctorKYCStatus, getDoctorStatus, getUserRole, loadDoctor } from "@/Redux/Actions/DoctorActions";
import { useDispatch, useSelector } from "react-redux";
import { getPatientStatus, loadPatient } from "@/Redux/Actions/PatientActions";

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
    const dispatch = useDispatch();
    const role = getUserRole();
    const { status } = useSelector((state) => state.getPatientStatus);
    const patient = useSelector((state) => state.loadPatient.patient);
    const patientId = patient?._id;

    useEffect(() => {
        if (role === "patient") {
            dispatch(loadPatient());
            if (patientId) {
                dispatch(getPatientStatus(patientId))
            }
        }
    }, [dispatch, role, patientId]);

    if (role !== "patient") {
        return <Navigate to="/unauthorized" />;
    }

    if (status === "Blocked") {
        return <Navigate to="/Block" />;
    }

    if (status === "Terminated") {
        return <Navigate to="/Terminate" />;
    }

    return <Outlet />;
};

export { DoctorPrivateRoute, PatientPrivateRoute };