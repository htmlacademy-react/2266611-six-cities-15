import { createSelector } from '@reduxjs/toolkit';
import { getPreviewOffers, getCurrentCity } from '../../../shared/lib/redux';

export const getFilteredOffersByCity = createSelector(
  [getPreviewOffers, getCurrentCity],
  (previewOffers, currentCity) => previewOffers.filter((offer) => offer.city.name === currentCity.name)
);
