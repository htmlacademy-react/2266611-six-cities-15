import { createAppAsyncThunk } from '../../../shared/lib/redux';
import { APIRoute } from '../../../shared/enum';
import { TPreviewOffer, TFullOffer, TFavoriteStatus } from '../../../shared/types/offer';

export const fetchPreviewOffers = createAppAsyncThunk<TPreviewOffer[], undefined>(
  'fetchOffers/preview',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TPreviewOffer[]>(APIRoute.Offers);

    return data;
  }
);

export const fetchFullOffer = createAppAsyncThunk<TFullOffer, string>(
  'fetchOffers/full',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<TFullOffer>(`${APIRoute.Offers}/${offerId}`);

    return data;
  }
);

export const fetchNearbyOffers = createAppAsyncThunk<TPreviewOffer[], string>(
  'fetchOffers/nearby',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<TPreviewOffer[]>(`${APIRoute.Offers}/${offerId}${APIRoute.Nearby}`);

    return data;
  }
);

export const fetchFavoriteOffers = createAppAsyncThunk<TPreviewOffer[], undefined>(
  'fetchOffers/favorite',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TPreviewOffer[]>(APIRoute.Favorite);

    return data;
  }
);

export const changeFavoriteOfferStatus = createAppAsyncThunk<TFullOffer, TFavoriteStatus>(
  'changeOffer/favoriteStatus',
  async ({ offerId, status }, { extra: api }) => {
    const { data } = await api.post<TFullOffer>(`${APIRoute.Favorite}/${offerId}/${status}`, { offerId, status });

    return data;
  }
);
