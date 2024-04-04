import { TComment } from '../../../shared/types/comment';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../shared/const';
import { APIStatus } from '../../../shared/const';
import { fetchReviews } from '../api/thunk';

type ReviewsState = {
  comments: TComment[];
  commentsStatus: APIStatus;
}

const initialState: ReviewsState = {
  comments: [],
  commentsStatus: APIStatus.Idle,
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
      });
  },
});

export const reviewsActions = { fetchReviews };
