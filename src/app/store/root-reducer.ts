import { combineReducers } from '@reduxjs/toolkit';
import { citySlice } from '../../entities/city';
import { offersSlice } from '../../entities/offers';
import { reviewsSlice } from '../../entities/reviews';

export const rootReducer = combineReducers({
  [citySlice.name]: citySlice.reducer,
  [offersSlice.name]: offersSlice.reducer,
  [reviewsSlice.name]: reviewsSlice.reducer,
});
