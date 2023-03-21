import {StarRate} from '@mui/icons-material';
import {Button, Container, Grid, TextField, Typography} from '@mui/material';
import {Formik} from 'formik';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {login, useCurrentUser} from '../../helpers/CRUD/read';

const Login = () => {
   const navigate = useNavigate();
   const currentUser = useCurrentUser();
   const dispatch = useDispatch();
   useEffect(() => {
      console.log('current User', currentUser.type);
      if (currentUser.type === 'admin') {
         navigate('/admin-dashboard');
      }
   }, [currentUser.type]);
   return (
      <Container maxWidth="lg" sx={{minHeight: '75vh'}}>
         <Grid
            sx={{
               margin: 'auto',
               display: 'flex',
               flexDirection: 'column',
               gap: '1rem',
               maxWidth: '320px',
            }}
         ></Grid>
         <Formik
            initialValues={{email: '', password: ''}}
            validate={values => {
               const errors = {};
               if (!values.email) {
                  errors.email = 'Необходимо указать адрес электронной почты';
               } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
               ) {
                  errors.email = 'Неправильный формат электронной почты';
               }
               return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
               dispatch(
                  login({email: values.email, password: values.password})
               );
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
                  <Grid
                     sx={{
                        margin: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        maxWidth: '320px',
                     }}
                  >
                     <Typography variant="h6">Авторизация</Typography>
                     <TextField
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Введите адрес электронной почты"
                     />

                     {errors.email && touched.email && errors.email}

                     <TextField
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Введите пароль"
                     />
                     {errors.password && touched.password && errors.password}
                     <Button
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                     >
                        Submit
                     </Button>
                  </Grid>
               </form>
            )}
         </Formik>
      </Container>
   );
};

export default Login;
