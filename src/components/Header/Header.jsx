import {Box, Container, Typography} from '@mui/material';
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useCurrentUser} from '../../helpers/CRUD/read';

const Header = () => {
   const currentUser = useCurrentUser();
   return (
      <Container maxWidth="lg">
         <Box
            sx={{
               margin: '2rem auto',
               textAlign: 'center',
            }}
         >
            <Typography variant="h4">Система распределения задач</Typography>
            <Box sx={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
               {currentUser.type === 'admin' && (
                  <>
                     <NavLink to="/add-worker">Добавить работника</NavLink>
                     <NavLink to="/add-model">Добавить модель</NavLink>
                     <NavLink to="/add-operations">Добавить операцию</NavLink>
                  </>
               )}
            </Box>
         </Box>
      </Container>
   );
};

export default Header;
