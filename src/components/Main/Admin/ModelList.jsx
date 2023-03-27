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
import {getAllModels, useModelList} from '../../../helpers/CRUD/read';

const ModelList = () => {
   const dispatch = useDispatch();
   const models = useModelList();

   useEffect(() => {
      dispatch(getAllModels());
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
                     <TableCell>Название модели</TableCell>
                     <TableCell>Артикул</TableCell>
                     <TableCell>Категория</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {models.map(row => (
                     <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                           {row.name}
                        </TableCell>
                        <TableCell>{row.article}</TableCell>
                        <TableCell>{row.category}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </Paper>
   );
};

export default ModelList;
