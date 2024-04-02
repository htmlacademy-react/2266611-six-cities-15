import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_SORT_OPTION } from '../const';
import { NameSpace } from '../../../shared/const';
import { TPreviewOffer, TFullOffer } from '../../../shared/types/offer';
import { APIStatus } from '../../../shared/const';
import { fetchPreviewOffers } from '../api/thunks';

type OffersState = {
  previewOffers: TPreviewOffer[];
  previewOffersStatus: APIStatus;
  fullOffers: TFullOffer[];
  fullOffersStatus: APIStatus;
  currentSortOption: string;
}

const initialState: OffersState = {
  previewOffers: [],
  previewOffersStatus: APIStatus.Idle,
  fullOffers: [],
  fullOffersStatus: APIStatus.Idle,
  currentSortOption: INITIAL_SORT_OPTION,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeSortOption(state, action: PayloadAction<string>) {
      state.currentSortOption = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPreviewOffers.pending, (state) => {
        state.previewOffersStatus = APIStatus.Loading;
      })
      .addCase(fetchPreviewOffers.fulfilled, (state, action) => {
        state.previewOffersStatus = APIStatus.Succeeded;
        state.previewOffers = action.payload;
      })
      .addCase(fetchPreviewOffers.rejected, (state) => {
        state.previewOffersStatus = APIStatus.Failed;
      });
  },
});

export const offersActions = { ...offersSlice.actions, fetchPreviewOffers };
