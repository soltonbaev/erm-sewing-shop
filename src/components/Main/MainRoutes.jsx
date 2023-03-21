import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AdminDashboard from './Admin/AdminDashboard';
import Login from './Login';

const MainRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
   );
};

export default MainRoutes;
