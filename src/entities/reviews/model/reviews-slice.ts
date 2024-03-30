import { TComment } from '../../../shared/types/comment';
import { comments } from '../../../mocks/comments';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../../shared/const';

type ReviewsState = {
  comments: TComment[];
}

const initialState: ReviewsState = {
  comments,
};

export const reviewsSlice = createSlice({
  name: NameSpace.Reviews,
  initialState,
  reducers: {
    getComments(state) {
      state.comments = comments;
    }
  },
});
