import {createSlice} from '@reduxjs/toolkit';
import {useRef} from 'react';
import {toast} from 'react-toastify';
import {addWorker} from '../helpers/CRUD/create';
import {getAllWorkers} from '../helpers/CRUD/read';

let toastId;

export const adminReducer = createSlice({
   name: 'counter',
   initialState: {
      workers: [],
   },
   reducers: {},
   extraReducers(builder) {
      builder.addCase(addWorker.rejected, (state, action) => {
         console.log('worker added rejected', action.payload);
         toast.error('Не удалось добавить работника', {hideProgressBar: true});
      });
      builder.addCase(addWorker.pending, (state, action) => {
         // console.log(' ', action.payload);
         toastId = toast.warn('Добавляю работника...');
      });
      builder.addCase(addWorker.fulfilled, (state, action) => {
         console.log('worker list - succees:', action.payload);
         toast.dismiss(toastId);
         toast.success('Работник был добавлен успешно', {
            hideProgressBar: true,
         });
      });
      builder.addCase(getAllWorkers.rejected, (state, action) => {
         console.log('worker list - rejected', action.payload);
         toast.error('Не удалось стянуть список работников', {
            hideProgressBar: true,
         });
      });

      builder.addCase(getAllWorkers.fulfilled, (state, action) => {
         console.log('worker alist - succees:', action.payload);
         state.workers = action.payload;
      });
   },
});

export const {} = adminReducer.actions;

export default adminReducer.reducer;
