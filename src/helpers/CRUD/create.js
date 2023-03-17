import {createAsyncThunk} from '@reduxjs/toolkit';

// Admin's actions
export const addWorker = createAsyncThunk('admin/addWorker', async () => {});
export const addModel = createAsyncThunk('admin/addModel', async () => {});
export const addOperation = createAsyncThunk('admin/addModel', async () => {});

// Cutter's actions
export const addCut = createAsyncThunk('admin/addModel', async () => {});

// Manager's action
export const addJob = createAsyncThunk('admin/addModel', async () => {});

//Quality Assurance Person actions
export const addDefect = createAsyncThunk('admin/addModel', async () => {});
