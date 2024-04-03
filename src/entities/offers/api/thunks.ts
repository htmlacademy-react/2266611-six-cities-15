import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../../shared/const';
import { TPreviewOffer, TFullOffer } from '../../../shared/types/offer';
import { AxiosInstance } from 'axios';

export const fetchPreviewOffers = createAsyncThunk<TPreviewOffer[], undefined, { extra: AxiosInstance }>(
  'fetchOffers/preview',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TPreviewOffer[]>(APIRoute.Offers);

    return data;
  }
);

export const fetchFullOffer = createAsyncThunk<TFullOffer, string, { extra: AxiosInstance }>(
  'fetchOffers/full',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<TFullOffer>(`${APIRoute.Offers}/${offerId}`);

    return data;
  }
);
