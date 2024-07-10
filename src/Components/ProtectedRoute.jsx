// src/Components/AuthorizedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthorizedRoute = () => {
  const { doctorDetail } = useSelector(state => state.doctorAuth);

  // If doctorDetail exists, user is authenticated
  if (doctorDetail) {
    return <Outlet />; // Render child routes
  }

  // Otherwise, redirect to login
  return <Navigate to="/doctorAuth" />;
};

export default AuthorizedRoute;