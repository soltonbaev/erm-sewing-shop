import {ErrorSharp} from '@mui/icons-material';
import {
   Autocomplete,
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
import {addModel, addWorker} from '../../../helpers/CRUD/create';
import {
   getAllModels,
   getAllOperations,
   getAllWorkers,
   useCurrentUser,
   useOperationList,
} from '../../../helpers/CRUD/read';
import ModelList from './ModelList';
import WorkerList from './WorkerList';

const AddModel = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const currentUser = useCurrentUser();
   useEffect(() => {
      if (currentUser.type !== 'admin') {
         navigate('/');
      }
   }, currentUser.type);

   useEffect(() => {
      dispatch(getAllOperations());
   }, []);

   let operations = useOperationList();

   //    const operations = [
   //       {label: 'Заготовка бейки', id: 1},
   //       {label: 'Стачать плечевой шов', id: 2},
   //       {label: 'Окантовка полочки', id: 3},
   //       {label: 'Закрепить рукав', id: 4},
   //       {label: 'Притачать кокетку к полочке', id: 5},
   //    ];

   return (
      <>
         {console.log('operations', operations)}
         <Formik
            initialValues={{
               name: '',
               article: '',
               category: '',
               operations: [],
            }}
            validate={values => {
               const errors = {};
               if (!values.article) {
                  errors.article = 'Необходимо указать артикль модели';
               } else if (!values.category) {
                  errors.category = 'Необходимо указать категорию модели';
               } else if (!values.category) {
                  errors.name = 'Необходимо указать название модели';
               }
               return errors;
            }}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
               const modelObj = {
                  name: values.name,
                  article: values.article,
                  category: values.category,
                  operations: operations,
               };
               await dispatch(addModel(modelObj));
               await dispatch(getAllModels());
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
                        <Typography variant="h6">Добавить модель</Typography>
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
                                 name="name"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.name}
                                 label="* Введите название модели"
                              />

                              <TextField
                                 type="text"
                                 name="article"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.article}
                                 label="* Введите артикуль модели"
                              />

                              <TextField
                                 label="* Введите категорию модели"
                                 type="text"
                                 name="category"
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.category}
                              />
                              <Autocomplete
                                 multiple
                                 //  disablePortal
                                 id="tags-standard"
                                 getOptionLabel={option => option.operation}
                                 options={[...operations]}
                                 sx={{width: 300}}
                                 //  onChange={handleChange}
                                 //  onBlur={handleBlur}
                                 //  value={values.operations}
                                 renderInput={params => (
                                    <TextField
                                       {...params}
                                       label="Операции пошива"
                                    />
                                 )}
                              />
                           </Grid>
                        </Grid>

                        <Typography sx={{color: 'red', padding: '1rem 0'}}>
                           {errors.name && touched.name && errors.name}
                           {errors.article && touched.article && errors.article}
                           {errors.category &&
                              touched.category &&
                              errors.category}
                        </Typography>
                        <Button
                           variant="contained"
                           type="submit"
                           disabled={isSubmitting}
                           // sx={{margin: '1rem 0'}}
                        >
                           Добавить новую модель
                        </Button>
                     </Paper>
                  </Box>
               </form>
            )}
         </Formik>
         <ModelList />
      </>
   );
};

export default AddModel;
