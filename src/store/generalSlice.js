import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {login} from '../helpers/CRUD/read';

let loginToastId;
// const notify = () => toast('Wow so easy!');
export const generalReducer = createSlice({
   name: 'general',
   initialState: {
      currentUser: {},
   },
   reducers: {},
   extraReducers(builder) {
      builder.addCase(login.rejected, (state, action) => {
         console.log('login rejected', action.payload);
         toast.dismiss(loginToastId);
         toast.error('Не удалось войти в систему', {hideProgressBar: true});
      });
      builder.addCase(login.pending, (state, action) => {
         console.log('login pending', action.payload);
         loginToastId = toast.warn(
            'Попытка авторизации... Пожалуйста подождите.'
         );
      });
      builder.addCase(login.fulfilled, (state, action) => {
         state.currentUser = action.payload;
         toast.dismiss(loginToastId);
         toast.success('Полъзователь успешно авторизирован!', {
            hideProgressBar: true,
         });
      });
   },
});

// export const {} = generalReducer.actions;

export default generalReducer.reducer;
