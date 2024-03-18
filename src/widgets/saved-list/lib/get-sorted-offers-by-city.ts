import { PreviewOfferType } from '../../../shared/types/offer';

export const getSortedOffersByCity = (offers: PreviewOfferType[]) => offers.reduce((accumulator: { [key: string]: PreviewOfferType[] }, offer) => {
  if (!offer.isFavorite) {
    return accumulator;
  }

  if (!accumulator[offer.city.name]) {
    accumulator[offer.city.name] = [];
  }

  accumulator[offer.city.name].push(offer);

  return accumulator;
}, {});
