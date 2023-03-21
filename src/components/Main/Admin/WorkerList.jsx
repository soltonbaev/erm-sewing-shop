import {
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getAllWorkers, useWorkerList} from '../../../helpers/CRUD/read';

const WorkerList = () => {
   const dispatch = useDispatch();
   const workers = useWorkerList();

   useEffect(() => {
      dispatch(getAllWorkers());
   }, []);

   return (
      <Paper
         elevation={5}
         sx={{margin: '2rem auto', padding: '1rem', maxWidth: '640px'}}
      >
         <TableContainer component={Paper}>
            <Table aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell>Имя</TableCell>
                     <TableCell>Фамилия</TableCell>
                     <TableCell>Элек. почта</TableCell>
                     <TableCell>Номер телефона</TableCell>
                     <TableCell>Тип работника</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {workers.map(row => (
                     <TableRow
                        key={row.uid}
                        //  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                     >
                        <TableCell component="th" scope="row">
                           {row.name}
                        </TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.phoneNumber}</TableCell>
                        <TableCell>{row.type}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Paper>
   );
};

export default WorkerList;
