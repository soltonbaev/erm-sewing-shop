import {configureStore} from '@reduxjs/toolkit';
import adminReducer from './adminSlice';
import cutterReducer from './cutterSlice';
import generalReducer from './generalSlice';
import managerReducer from './managerSlice';
import qaReducer from './qaSlice';
import sewistReducer from './sewistSlice';

export const store = configureStore({
   reducer: {
      general: generalReducer,
      admin: adminReducer,
      cutter: cutterReducer,
      manager: managerReducer,
      qa: qaReducer,
      sewist: sewistReducer,
   },
});
