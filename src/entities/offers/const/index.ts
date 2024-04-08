export const SORT_OPTIONS: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
];

export enum FavoriteOfferStatus {
  Add = 1,
  Delete = 0
}

export const INITIAL_SORT_OPTION = SORT_OPTIONS[0];

export const NEARBY_OFFERS_COUNT = 3;
