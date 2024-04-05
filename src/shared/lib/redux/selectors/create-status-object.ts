import { createSelector } from '@reduxjs/toolkit';
import { APIStatus } from '../../../enum';
import { TRootState } from '../types/store-types';

export const createStatusObject = (getStatusSelector: (state: TRootState) => APIStatus) => createSelector(
  [getStatusSelector],
  (state) => ({
    isIdle: APIStatus.Idle === state,
    isLoading: APIStatus.Loading === state,
    isUncompleted: APIStatus.Idle === state || APIStatus.Loading === state,
    isSucceeded: APIStatus.Succeeded === state,
    isFailed: APIStatus.Failed === state,
  })
);
