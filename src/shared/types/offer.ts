export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}
export type TCity = {
  name: string;
  location: TLocation;
}

type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type TPreviewOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage?: string;
}

export type TFullOffer = TPreviewOffer & {
  description: string;
  images: string[];
  goods: string[];
  host: THost;
  bedrooms: number;
  maxAdults: number;
}

export type TFavoriteStatus = {
  offerId: string;
  status: number;
};
