import { createSlice } from '@reduxjs/toolkit';
import { Nullable } from 'vitest';
import { AuthorizationStatus, NameSpace } from '../../../shared/enum';
import { checkAuthAction, logOutAction, loginAction } from '../api/thunk';
import { TUser } from '../../../shared/types/user';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: Nullable<TUser>;
}

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logOutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
      });
  },
});

export const userActions = { checkAuthAction, loginAction, logOutAction };
