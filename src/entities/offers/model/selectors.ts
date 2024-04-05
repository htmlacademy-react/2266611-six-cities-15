import { createSelector } from '@reduxjs/toolkit';
import { getPreviewOffers, getCurrentCity, getCurrentSortOption } from '../../../shared/lib/redux';
import { SortOption } from '../../../shared/enum';

export const getFilteredOffersByCity = createSelector(
  [getPreviewOffers, getCurrentCity],
  (previewOffers, currentCity) => previewOffers.filter((offer) => offer.city.name === currentCity.name)
);

const getSortedOffers = createSelector(
  [getFilteredOffersByCity, getCurrentSortOption],
  (filteredOffers, sortOption) => {
    switch (sortOption) {
      case SortOption.LowToHigh:
        return filteredOffers.toSorted((first, second) => first.price - second.price);
      case SortOption.HighToLow:
        return filteredOffers.toSorted((first, second) => second.price - first.price);
      case SortOption.TopRated:
        return filteredOffers.toSorted((first, second) => second.rating - first.rating);
      default:
        return filteredOffers;
    }
  }
);

export const getCurrentOffers = createSelector(
  [getSortedOffers],
  (offers) => offers
);
