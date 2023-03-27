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
import {addWorker} from '../../../helpers/CRUD/create';
import {getAllWorkers, useCurrentUser} from '../../../helpers/CRUD/read';
import WorkerList from './WorkerList';

const AddWorker = () => {
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
               email: '',
               password: '',
               name: '',
               lastName: '',
               phoneNumber: '',
               type: '',
            }}
            validate={values => {
               const errors = {};
               if (!values.email) {
                  errors.email = 'Необходимо указать адрес электронной почты';
               } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
               ) {
                  errors.email = 'Неправильный формат электронной почты';
               } else if (!values.type) {
                  errors.type = 'Необходимо выбрать тип работника';
               }
               return errors;
            }}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
               const workerObj = {
                  email: values.email,
                  password: values.password,
                  name: values.name,
                  lastName: values.lastName,
                  phoneNumber: values.phoneNumber,
                  type: values.type,
               };
               await dispatch(addWorker(workerObj));
               await dispatch(getAllWorkers());
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
                        <Typography variant="h6">Добавить работника</Typography>
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
                                 type="email"
                                 name="email"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.email}
                                 placeholder="* Введите адрес электронной почты"
                              />

                              <TextField
                                 type="password"
                                 name="password"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.password}
                                 placeholder="* Создайте пароль"
                              />

                              <TextField
                                 select
                                 label="* Выберите тип работника"
                                 type="text"
                                 name="type"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.type}
                              >
                                 <MenuItem value="cutter">Закройщик</MenuItem>
                                 <MenuItem value="manager">
                                    Мастер по цеху
                                 </MenuItem>
                                 <MenuItem value="qa">
                                    Контроль качества ОТК
                                 </MenuItem>
                                 <MenuItem value="sewist">Швея</MenuItem>
                              </TextField>
                           </Grid>
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
                                 name="name"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.name}
                                 placeholder="Имя работника"
                              />
                              <TextField
                                 type="text"
                                 name="lastName"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.lastName}
                                 placeholder="Фамилия работника"
                              />
                              <TextField
                                 type="number"
                                 name="phoneNumber"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.phoneNumber}
                                 placeholder="Телефон работника"
                              />
                           </Grid>
                        </Grid>

                        <Typography sx={{color: 'red', padding: '1rem 0'}}>
                           {errors.email && touched.email && errors.email}
                           {errors.password &&
                              touched.password &&
                              errors.password}
                           {errors.type && touched.type && errors.type}
                        </Typography>
                        <Button
                           variant="contained"
                           type="submit"
                           disabled={isSubmitting}
                           // sx={{margin: '1rem 0'}}
                        >
                           Добавить работника
                        </Button>
                     </Paper>
                  </Box>
               </form>
            )}
         </Formik>
         <WorkerList />
      </>
   );
};

export default AddWorker;
