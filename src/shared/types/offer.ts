export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}
export type City = {
  name: string;
  location: Location;
}

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

type BasicOfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type PreviewOfferType = BasicOfferType & {
  previewImage: string;
};

export type FullOfferType = BasicOfferType & {
  description: string;
  images: string[];
  goods: string[];
  host: Host;
  bedrooms: number;
  maxAdults: number;
}
