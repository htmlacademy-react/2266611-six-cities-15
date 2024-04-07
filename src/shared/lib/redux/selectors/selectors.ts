import { TRootState } from '../../../../types';
import { createStatusObject } from './create-status-object';

export const getPreviewOffers = (state: TRootState) => state.offers.previewOffers;
export const getPreviewOffersStatus = (state: TRootState) => state.offers.previewOffersStatus;

export const getFullOffer = (state: TRootState) => state.offers.fullOffer;
export const getFullOfferStatus = (state: TRootState) => state.offers.fullOfferStatus;

export const getNearbyOffers = (state: TRootState) => state.offers.nearbyOffers;
export const getNearbyOffersStatus = (state: TRootState) => state.offers.nearbyOffersStatus;

export const getComments = (state: TRootState) => state.reviews.comments;
export const getCommentsStatus = (state: TRootState) => state.reviews.commentsStatus;
export const getAddCommentStatus = (state: TRootState) => state.reviews.addCommentStatus;

export const getFavoriteOffers = (state: TRootState) => state.offers.favoriteOffers;
export const getFavoriteOffersStatus = (state: TRootState) => state.offers.favoriteOffersStatus;
export const changeFavoriteOfferStatus = (state: TRootState) => state.offers.changeFavoriteOfferStatus;

export const getAuthorizationStatus = (state: TRootState) => state.user.authorizationStatus;
export const getLoginStatus = (state: TRootState) => state.user.loginStatus;
export const getUserData = (state: TRootState) => state.user.userData;

export const getCurrentCity = (state: TRootState) => state.city.currentCity;

export const getActiveId = (state: TRootState) => state.offers.activeId;

export const getCurrentSortOption = (state: TRootState) => state.offers.currentSortOption;

export const getPreviewOffersStatusObject = createStatusObject(getPreviewOffersStatus);
export const getFullOfferStatusObject = createStatusObject(getFullOfferStatus);
export const getNearbyOffersStatusObject = createStatusObject(getNearbyOffersStatus);
export const getCommentsStatusObject = createStatusObject(getCommentsStatus);
export const getAddCommentStatusObject = createStatusObject(getAddCommentStatus);
export const getLoginStatusObject = createStatusObject(getLoginStatus);
export const getFavoriteOffersStatusObject = createStatusObject(getFavoriteOffersStatus);
export const changeFavoriteStatusObject = createStatusObject(changeFavoriteOfferStatus);
