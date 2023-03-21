import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
   return <Container maxWidth='lg'>
      <Box  sx={{margin: '2rem auto', textAlign: 'center'}}>
<Typography variant="h4">Система распределения задач</Typography></Box>
   </Container>;
};

export default Header;
