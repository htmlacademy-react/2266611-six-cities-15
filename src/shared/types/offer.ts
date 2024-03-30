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

type TBasicOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type TPreviewOffer = TBasicOffer & {
  previewImage: string;
};

export type TFullOffer = TBasicOffer & {
  description: string;
  images: string[];
  goods: string[];
  host: THost;
  bedrooms: number;
  maxAdults: number;
}
