import {configureStore} from '@reduxjs/toolkit';
import {adminReducer} from './adminSlice';
import {cutterReducer} from './cutterSlice';
import {managerReducer} from './managerSlice';
import {sewistReducer} from './sewistSlice';

export const store = configureStore({
   reducer: {
      admin: adminReducer,
      cutter: cutterReducer,
      manager: managerReducer,
      qa: qaReducer,
      sewist: sewistReducer,
   },
});
