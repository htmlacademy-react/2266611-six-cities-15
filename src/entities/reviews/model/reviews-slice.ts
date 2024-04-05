import { TComment } from '../../../shared/types/comment';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../shared/enum';
import { APIStatus } from '../../../shared/enum';
import { fetchReviews, addReview } from '../api/thunk';

type ReviewsState = {
  comments: TComment[];
  commentsStatus: APIStatus;
  addCommentStatus: APIStatus;
}

const initialState: ReviewsState = {
  comments: [],
  commentsStatus: APIStatus.Idle,
  addCommentStatus: APIStatus.Idle,
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.commentsStatus = APIStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.commentsStatus = APIStatus.Succeeded;
        state.comments = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.commentsStatus = APIStatus.Failed;
        state.comments = [];
      })
      .addCase(addReview.pending, (state) => {
        state.addCommentStatus = APIStatus.Loading;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.addCommentStatus = APIStatus.Succeeded;
        state.comments.push(action.payload);
      })
      .addCase(addReview.rejected, (state) => {
        state.addCommentStatus = APIStatus.Failed;
      });
  },
});

export const reviewsActions = { fetchReviews, addReview };
