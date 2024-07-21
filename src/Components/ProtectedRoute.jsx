import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { doctor } = useSelector((state) => state.doctorAuth);

  return doctor ? <Outlet /> : <Navigate to='/doctorAuth' />;
};

export default PrivateRoute;
