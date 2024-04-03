import { TRootState } from '../types/store-types';

export const getPreviewOffers = (state: TRootState) => state.offers.previewOffers;
export const getPreviewOffersStatus = (state: TRootState) => state.offers.previewOffersStatus;

export const getFullOffer = (state: TRootState) => state.offers.fullOffer;
export const getFullOfferStatus = (state: TRootState) => state.offers.fullOfferStatus;

export const getComments = (state: TRootState) => state.reviews.comments;

export const getCurrentCity = (state: TRootState) => state.city.currentCity;

export const getCurrentSortOption = (state: TRootState) => state.offers.currentSortOption;
