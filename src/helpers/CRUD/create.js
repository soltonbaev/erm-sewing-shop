import {createAsyncThunk} from '@reduxjs/toolkit';
import {doc, setDoc} from 'firebase/firestore';
import fireBase, {db} from '../firebase';

// Admin's actions
export const addWorker = createAsyncThunk(
   'admin/addWorker',
   async ({email, password, name, lastName, phoneNumber, type}) => {
      // create user with email and password
      let authRes = await fireBase
         .auth()
         .createUserWithEmailAndPassword(email, password);

      let setDocRes = await setDoc(doc(db, 'users', authRes.user.uid), {
         name: name,
         lastName: lastName,
         email: email,
         phoneNumber: phoneNumber,
         type: type,
      });

      return {authRes, setDocRes};
   }
);

export const addModel = createAsyncThunk('admin/addModel', async () => {});
export const addOperation = createAsyncThunk('admin/addModel', async () => {});

// Cutter's actions
export const addCut = createAsyncThunk('admin/addModel', async () => {});

// Manager's action
export const addJob = createAsyncThunk('admin/addModel', async () => {});

//Quality Assurance Person actions
export const addDefect = createAsyncThunk('admin/addModel', async () => {});
