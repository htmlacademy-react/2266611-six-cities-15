import { createAppAsyncThunk } from '../../../shared/lib/redux/hooks/create-app-async-thunk';
import { APIRoute } from '../../../shared/const';
import { TComment } from '../../../shared/types/comment';

export const fetchReviews = createAppAsyncThunk<TComment[], string>(
  'fetchReviews/comments',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<TComment[]>(`${APIRoute.Reviews}/${offerId}`);

    return data;
  }
);
