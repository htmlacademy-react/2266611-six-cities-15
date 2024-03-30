import { TPreviewOffer } from '../../../shared/types/offer';

export const getSortedOffersByCity = (offers: TPreviewOffer[]) => offers.reduce((accumulator: { [key: string]: TPreviewOffer[] }, offer) => {
  if (!offer.isFavorite) {
    return accumulator;
  }

  if (!accumulator[offer.city.name]) {
    accumulator[offer.city.name] = [];
  }

  accumulator[offer.city.name].push(offer);

  return accumulator;
}, {});
