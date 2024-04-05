import { combineReducers } from '@reduxjs/toolkit';
import { citySlice } from '../../entities/city';
import { offersSlice } from '../../entities/offers';
import { reviewsSlice } from '../../entities/reviews';
import { userSlice } from '../../entities/user';

export const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
  [citySlice.name]: citySlice.reducer,
  [offersSlice.name]: offersSlice.reducer,
  [reviewsSlice.name]: reviewsSlice.reducer,
});
