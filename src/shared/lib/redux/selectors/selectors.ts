import { TRootState } from '../types/store-types';

export const getPreviewOffers = (state: TRootState) => state.offers.previewOffers;
export const getFullOffers = (state: TRootState) => state.offers.fullOffers;

export const getCurrentSortOption = (state: TRootState) => state.offers.currentSortOption;

export const getCurrentCity = (state: TRootState) => state.city.currentCity;

export const getComments = (state: TRootState) => state.reviews.comments;
