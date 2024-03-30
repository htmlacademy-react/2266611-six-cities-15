import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_SORT_OPTION } from '../const';
import { NameSpace } from '../../../shared/const';
import { TPreviewOffer, TFullOffer } from '../../../shared/types/offer';
import { offers } from '../../../mocks/offers';
import { fullOffers } from '../../../mocks/full-offers';

type OffersState = {
  previewOffers: TPreviewOffer[];
  fullOffers: TFullOffer[];
  currentSortOption: string;
}

const initialState: OffersState = {
  previewOffers: offers,
  fullOffers,
  currentSortOption: INITIAL_SORT_OPTION,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    getPreviewOffers(state) {
      state.previewOffers = offers;
    },
    getFullOffers(state) {
      state.fullOffers = fullOffers;
    },
    changeSortOption(state, action: PayloadAction<string>) {
      state.currentSortOption = action.payload;
    }
  },
});

export const { changeSortOption } = offersSlice.actions;
