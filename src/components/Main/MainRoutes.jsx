import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AddModel from './Admin/AddModel';
import AddOperations from './Admin/AddOperations';
import AddWorker from './Admin/AddWorker';
import AdminDashboard from './Admin/AdminDashboard';
import Login from './Login';

const MainRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/admin-dashboard" element={<AdminDashboard />} />
         <Route path="/add-worker" element={<AddWorker />} />
         <Route path="/add-model" element={<AddModel />} />
         <Route path="/add-operations" element={<AddOperations />} />
      </Routes>
   );
};

export default MainRoutes;
