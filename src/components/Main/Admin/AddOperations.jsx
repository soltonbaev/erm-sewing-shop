import {
   Button,
   Grid,
   MenuItem,
   Paper,
   Select,
   TextField,
   Typography,
} from '@mui/material';
import {Box} from '@mui/system';
import {Formik} from 'formik';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {addOperation, addWorker} from '../../../helpers/CRUD/create';
import {
   getAllOperations,
   getAllWorkers,
   useCurrentUser,
} from '../../../helpers/CRUD/read';
import OperationList from './OperationList';
import WorkerList from './WorkerList';

const AddOperations = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const currentUser = useCurrentUser();
   useEffect(() => {
      if (currentUser.type !== 'admin') {
         navigate('/');
      }
   }, currentUser.type);

   return (
      <>
         <Formik
            initialValues={{
               operation: '',
               duration: '',
               cost: '',
            }}
            validate={values => {
               const errors = {};
               if (!values.operation) {
                  errors.operation =
                     'Необходимо указать название операции пошива';
               } else if (!values.duration) {
                  errors.duration = 'Необходимо указать стоимость операции';
               } else if (!values.cost) {
                  errors.cost = 'Необходимо указать длительность операции';
               }
               return errors;
            }}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
               const operationObj = {
                  operation: values.operation,
                  duration: values.duration,
                  cost: values.cost,
               };
               await dispatch(addOperation(operationObj));
               await dispatch(getAllOperations());
               setSubmitting(false);
               resetForm({values: ''});
            }}
         >
            {({
               values,
               errors,
               touched,
               handleChange,
               handleBlur,
               handleSubmit,
               isSubmitting,
               /* and other goodies */
            }) => (
               <form onSubmit={handleSubmit}>
                  <Box sx={{display: 'flex', justifyContent: 'center'}}>
                     <Paper elevation={4} sx={{padding: '2rem'}}>
                        <Typography variant="h6">
                           Добавить операцию пошива
                        </Typography>
                        <Grid
                           container
                           spacing={3}
                           sx={
                              {
                                 // margin: 'auto',
                                 // display: 'flex',
                                 // gap: '1rem',
                                 // maxWidth: '320px',
                              }
                           }
                        >
                           <Grid
                              item
                              sx={{
                                 display: 'flex',
                                 flexDirection: 'column',
                                 gap: '1rem',
                                 width: '320px',
                              }}
                           >
                              <TextField
                                 type="text"
                                 name="operation"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.operation}
                                 label="* Введите название операции"
                              />

                              <TextField
                                 type="text"
                                 name="duration"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.duration}
                                 label="* Укажите длительность операции"
                              />
                              <TextField
                                 label="* Укажите стоимость операции"
                                 type="text"
                                 name="cost"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.cost}
                              />
                           </Grid>
                        </Grid>

                        <Typography sx={{color: 'red', padding: '1rem 0'}}>
                           {errors.operation &&
                              touched.operation &&
                              errors.operation}
                           {errors.duration &&
                              touched.duration &&
                              errors.duration}
                           {errors.cost && touched.cost && errors.cost}
                        </Typography>
                        <Button
                           variant="contained"
                           type="submit"
                           disabled={isSubmitting}
                           // sx={{margin: '1rem 0'}}
                        >
                           Добавить операцию
                        </Button>
                     </Paper>
                  </Box>
               </form>
            )}
         </Formik>
         <OperationList />
      </>
   );
};

export default AddOperations;
