import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_CITY } from '../const';
import { NameSpace } from '../../../shared/enum';
import { TCity } from '../../../shared/types/offer';

type CityState = {
  currentCity: TCity;
}

const initialState: CityState = {
  currentCity: INITIAL_CITY,
};

export const citySlice = createSlice({
  name: NameSpace.City,
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<TCity>) {
      state.currentCity = action.payload;
    }
  },
});

export const cityActions = citySlice.actions;
