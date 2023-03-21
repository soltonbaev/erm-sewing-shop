import {Container, Typography} from '@mui/material';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useCurrentUser} from '../../../helpers/CRUD/read';
import AddWorker from './AddWorker';

const AdminDashboard = () => {
   const navigate = useNavigate();
   const currentUser = useCurrentUser();
   useEffect(() => {
      if (currentUser.type !== 'admin') {
         navigate('/');
      }
   }, currentUser.type);
   return (
      <>
         <Container maxWidth="lg">
            <Typography variant="h5" align="center">
               Панель администратора
            </Typography>
            <AddWorker />
         </Container>
      </>
   );
};

export default AdminDashboard;
