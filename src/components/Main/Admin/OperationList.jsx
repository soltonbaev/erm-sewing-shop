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
import {getAllOperations, useOperationList} from '../../../helpers/CRUD/read';

const OperationList = () => {
   const dispatch = useDispatch();
   const operations = useOperationList();

   useEffect(() => {
      dispatch(getAllOperations());
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
                     <TableCell>Операция</TableCell>
                     <TableCell>Длительность</TableCell>
                     <TableCell>Стоимость</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {operations.map(row => (
                     <TableRow
                        key={row.id}
                        //  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                     >
                        <TableCell component="th" scope="row">
                           {row.operation}
                        </TableCell>
                        <TableCell>{row.duration}</TableCell>
                        <TableCell>{row.cost}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Paper>
   );
};

export default OperationList;
