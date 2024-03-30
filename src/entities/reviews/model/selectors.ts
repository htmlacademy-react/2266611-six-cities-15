import { createSelector } from '@reduxjs/toolkit';
import { sortByDate } from '../lib/sort-by-date';
import { MAX_COMMENT_COUNT } from '../const';
import { getComments } from '../../../shared/lib/redux';

export const getSortedComments = createSelector(
  [getComments],
  (comments) => [...comments].sort(sortByDate).slice(0, MAX_COMMENT_COUNT)
);
