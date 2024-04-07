import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INITIAL_SORT_OPTION, NEARBY_OFFERS_COUNT } from '../const';
import { NameSpace, APIStatus } from '../../../shared/enum';
import { getRandomItemsFromArray } from '../../../shared/lib/utils';
import { TPreviewOffer, TFullOffer } from '../../../shared/types/offer';
import { fetchPreviewOffers, fetchFullOffer, fetchNearbyOffers, changeFavoriteOfferStatus, fetchFavoriteOffers } from '../api/thunks';
import { Nullable } from 'vitest';

type OffersState = {
  activeId?: string;
  previewOffers: TPreviewOffer[];
  previewOffersStatus: APIStatus;
  fullOffer: Nullable<TFullOffer>;
  fullOfferStatus: APIStatus;
  nearbyOffers: TPreviewOffer[];
  nearbyOffersStatus: APIStatus;
  favoriteOffers: TPreviewOffer[];
  favoriteOffersStatus: APIStatus;
  changeFavoriteOfferStatus: APIStatus;
  currentSortOption: string;
}

const initialState: OffersState = {
  activeId: undefined,
  previewOffers: [],
  previewOffersStatus: APIStatus.Idle,
  fullOffer: null,
  fullOfferStatus: APIStatus.Idle,
  nearbyOffers: [],
  nearbyOffersStatus: APIStatus.Idle,
  favoriteOffers: [],
  favoriteOffersStatus: APIStatus.Idle,
  changeFavoriteOfferStatus: APIStatus.Idle,
  currentSortOption: INITIAL_SORT_OPTION,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeSortOption(state, action: PayloadAction<string>) {
      state.currentSortOption = action.payload;
    },
    setActiveId(state, action: PayloadAction<string | undefined>) {
      state.activeId = action.payload;
    },
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
      })
      .addCase(fetchFullOffer.pending, (state) => {
        state.fullOfferStatus = APIStatus.Loading;
      })
      .addCase(fetchFullOffer.fulfilled, (state, action) => {
        state.fullOfferStatus = APIStatus.Succeeded;
        state.fullOffer = action.payload;
      })
      .addCase(fetchFullOffer.rejected, (state) => {
        state.fullOfferStatus = APIStatus.Failed;
        state.fullOffer = null;
      })
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.nearbyOffersStatus = APIStatus.Loading;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffersStatus = APIStatus.Succeeded;
        state.nearbyOffers = getRandomItemsFromArray(action.payload, NEARBY_OFFERS_COUNT);
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.nearbyOffersStatus = APIStatus.Failed;
        state.nearbyOffers = [];
      })
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.favoriteOffersStatus = APIStatus.Loading;
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.favoriteOffersStatus = APIStatus.Succeeded;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.favoriteOffersStatus = APIStatus.Failed;
      })
      .addCase(changeFavoriteOfferStatus.pending, (state) => {
        state.changeFavoriteOfferStatus = APIStatus.Loading;
      })
      .addCase(changeFavoriteOfferStatus.fulfilled, (state, action) => {
        state.changeFavoriteOfferStatus = APIStatus.Succeeded;

        state.fullOffer = action.payload;
        state.previewOffers = state.previewOffers.map((offer) => (offer.id === action.payload.id) ? action.payload : offer);
        state.nearbyOffers = state.nearbyOffers.map((offer) => (offer.id === action.payload.id) ? action.payload : offer);

        if (action.payload.isFavorite) {
          state.favoriteOffers.push(action.payload);
        } else {
          state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload.id);
        }
      })
      .addCase(changeFavoriteOfferStatus.rejected, (state) => {
        state.changeFavoriteOfferStatus = APIStatus.Failed;
      });
  },
});

export const offersActions = {
  ...offersSlice.actions,
  fetchPreviewOffers,
  fetchFullOffer,
  fetchNearbyOffers,
  fetchFavoriteOffers,
  changeFavoriteOfferStatus
};
