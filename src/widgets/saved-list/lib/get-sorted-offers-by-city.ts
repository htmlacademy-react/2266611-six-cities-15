import { OfferType } from '../../../shared/types/offer';

export const getSortedOffersByCity = (offers: OfferType[]) => offers.reduce((accumulator: { [key: string]: OfferType[] }, offer) => {
  if (!offer.isFavorite) {
    return accumulator;
  }

  if (!accumulator[offer.city.name]) {
    accumulator[offer.city.name] = [];
  }

  accumulator[offer.city.name].push(offer);

  return accumulator;
}, {});
