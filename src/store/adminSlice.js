import {createSlice} from '@reduxjs/toolkit';
import {useRef} from 'react';
import {toast} from 'react-toastify';
import {addModel, addOperation, addWorker} from '../helpers/CRUD/create';
import {
   getAllModels,
   getAllOperations,
   getAllWorkers,
} from '../helpers/CRUD/read';

let toastId;

export const adminReducer = createSlice({
   name: 'counter',
   initialState: {
      workers: [],
      models: [],
      operations: [],
   },
   reducers: {},
   extraReducers(builder) {
      //! add new worker
      builder.addCase(addWorker.rejected, (state, action) => {
         // console.log('worker added rejected', action.payload);
         toast.error('Не удалось добавить работника', {hideProgressBar: true});
      });
      builder.addCase(addWorker.pending, (state, action) => {
         // console.log(' ', action.payload);
         toastId = toast.warn('Добавляю работника...');
      });
      builder.addCase(addWorker.fulfilled, (state, action) => {
         // console.log('worker list - succees:', action.payload);
         toast.dismiss(toastId);
         toast.success('Работник был добавлен успешно', {
            hideProgressBar: true,
         });
      });

      //! fetch all workers except admin

      builder.addCase(getAllWorkers.rejected, (state, action) => {
         // console.log('worker list - rejected', action.payload);
         toast.error('Не удалось стянуть список работников', {
            hideProgressBar: true,
         });
      });

      builder.addCase(getAllWorkers.fulfilled, (state, action) => {
         // console.log('worker alist - succees:', action.payload);
         state.workers = action.payload;
      });

      //! add model cases

      builder.addCase(getAllModels.rejected, (state, action) => {
         // console.log('worker list - rejected', action.payload);
         toast.error('Не удалось стянуть список работников', {
            hideProgressBar: true,
         });
      });

      builder.addCase(getAllModels.fulfilled, (state, action) => {
         // console.log('worker alist - succees:', action.payload);
         state.models = action.payload;
      });

      builder.addCase(addModel.rejected, (state, action) => {
         // console.log('model added rejected', action.payload);
         toast.error('Не удалось добавить модель', {
            hideProgressBar: true,
         });
      });

      builder.addCase(addModel.pending, (state, action) => {
         // console.log(' ', action.payload);
         toastId = toast.warn('Добавление новой модели...');
      });
      builder.addCase(addModel.fulfilled, (state, action) => {
         // console.log('model list - succees:', action.payload);
         toast.dismiss(toastId);
         toast.success('Новая модель была добавлен успешно', {
            hideProgressBar: true,
         });
      });
      //! add operation cases

      builder.addCase(getAllOperations.rejected, (state, action) => {
         // console.log('operation list - rejected', action.payload);
         toast.error('Не удалось стянуть список работников', {
            hideProgressBar: true,
         });
      });

      builder.addCase(getAllOperations.fulfilled, (state, action) => {
         // console.log('operation alist - succees:', action.payload);
         state.operations = action.payload;
      });

      builder.addCase(addOperation.rejected, (state, action) => {
         // console.log('model added rejected', action.payload);
         toast.error('Не удалось добавить операцию пошива', {
            hideProgressBar: true,
         });
      });
      builder.addCase(addOperation.pending, (state, action) => {
         // console.log(' ', action.payload);
         toastId = toast.warn('Добавление новой операции пошива...');
      });
      builder.addCase(addOperation.fulfilled, (state, action) => {
         // console.log('model list - succees:', action.payload);
         toast.dismiss(toastId);
         toast.success('Новая операция пошива была добавлен успешно', {
            hideProgressBar: true,
         });
      });
   },
});

export const {} = adminReducer.actions;

export default adminReducer.reducer;
