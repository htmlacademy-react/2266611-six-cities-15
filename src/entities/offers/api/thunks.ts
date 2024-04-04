import { createAppAsyncThunk } from '../../../shared/lib/redux/hooks/create-app-async-thunk';
import { APIRoute } from '../../../shared/const';
import { TPreviewOffer, TFullOffer } from '../../../shared/types/offer';

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
