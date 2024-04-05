import { createAppAsyncThunk } from '../../../shared/lib/redux';
import { APIRoute } from '../../../shared/enum';
import { TComment, TReviewData } from '../../../shared/types/comment';

export const fetchReviews = createAppAsyncThunk<TComment[], string>(
  'fetchReviews/comments',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<TComment[]>(`${APIRoute.Reviews}/${offerId}`);

    return data;
  }
);

export const addReview = createAppAsyncThunk<TComment, TReviewData>(
  'addReview/comment',
  async ({ offerId, comment, rating }, { extra: api }) => {
    const { data } = await api.post<TComment>(`${APIRoute.Reviews}/${offerId}`, { comment, rating });
    return data;
  },
);
