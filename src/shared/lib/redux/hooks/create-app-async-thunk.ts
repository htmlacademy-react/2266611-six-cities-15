import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TRootState, TAppDispatch } from '../types/store-types';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: TRootState;
  dispatch: TAppDispatch;
  extra: AxiosInstance;
}>();
