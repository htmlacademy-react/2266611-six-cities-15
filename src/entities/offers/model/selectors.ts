import { createSelector } from '@reduxjs/toolkit';
import { getPreviewOffers, getCurrentCity, getCurrentSortOption } from '../../../shared/lib/redux';

export const getFilteredOffersByCity = createSelector(
  [getPreviewOffers, getCurrentCity],
  (previewOffers, currentCity) => previewOffers.filter((offer) => offer.city.name === currentCity.name)
);

const getSortedOffers = createSelector(
  [getFilteredOffersByCity, getCurrentSortOption],
  (filteredOffers, sortOption) => {
    switch (sortOption) {
      case 'Price: low to high':
        return filteredOffers.toSorted((a, b) => a.price - b.price);
      case 'Price: high to low':
        return filteredOffers.toSorted((a, b) => b.price - a.price);
      case 'Top rated first':
        return filteredOffers.toSorted((a, b) => b.rating - a.rating);
      default:
        return filteredOffers;
    }
  }
);

export const getCurrentOffers = createSelector(
  [getSortedOffers],
  (offers) => offers
);
