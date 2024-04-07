import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { TRootState, TAppDispatch } from '../../../../types';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: TRootState;
  dispatch: TAppDispatch;
  extra: AxiosInstance;
}>();
