import { createAppAsyncThunk } from '../../../shared/lib/redux';
import { APIRoute } from '../../../shared/enum';
import { TComment } from '../../../shared/types/comment';

export const fetchReviews = createAppAsyncThunk<TComment[], string>(
  'fetchReviews/comments',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<TComment[]>(`${APIRoute.Reviews}/${offerId}`);

    return data;
  }
);
