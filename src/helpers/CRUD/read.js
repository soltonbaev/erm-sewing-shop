import {createAsyncThunk} from '@reduxjs/toolkit';
import {
   collection,
   doc,
   getDoc,
   getDocs,
   query,
   where,
} from 'firebase/firestore';
import {useSelector} from 'react-redux';
import fireBase, {db} from '../firebase';

export const useCurrentUser = () => {
   return useSelector(state => state.general.currentUser);
};

export const useWorkerList = () => {
   return useSelector(state => state.admin.workers);
};

export const useModelList = () => {
   return useSelector(state => state.admin.models);
};

export const useOperationList = () => {
   return useSelector(state => state.admin.operations);
};

export const login = createAsyncThunk(
   'authorization/login',
   async ({email, password}) => {
      let res = await fireBase
         .auth()
         .signInWithEmailAndPassword(email, password);

      return await getUserFromDb(res);
      async function getUserFromDb(loginRes) {
         const docRef = doc(db, 'users', loginRes.user.uid);
         const docSnap = await getDoc(docRef);
         if (docSnap.exists()) {
            return docSnap.data();
         } else {
            return 'No such document!';
         }
      }
   }
);

export const getWorkersByType = createAsyncThunk(
   'admin/getWorkersByType',
   async type => {
      let arr = [];

      const q = query(collection(db, 'users'), where('type', '==', type));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
         arr.push([doc.id, doc.data()]);
      });

      return arr;
   }
);

export const getAllWorkers = createAsyncThunk(
   'admin/getAllWorkers',
   async () => {
      let arr = [];
      const q = query(collection(db, 'users'), where('type', '!=', 'admin'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
         arr.push(doc.data());
      });
      return arr;
   }
);

export const getAllModels = createAsyncThunk('admin/getAllModels', async () => {
   let arr = [];
   const querySnapshot = await getDocs(collection(db, 'models'));
   querySnapshot.forEach(doc => {
      arr.push(doc.data());
   });

   return arr;
});

export const getAllOperations = createAsyncThunk(
   'admin/getAllOperations',
   async () => {
      let arr = [];
      const querySnapshot = await getDocs(collection(db, 'operations'));
      querySnapshot.forEach(doc => {
         arr.push(doc.data());
      });

      return arr;
   }
);
