import { Comment } from '../../../shared/types/comment';

export const sortByDate = (first: Comment, second: Comment) => {
  const dateFirst = new Date(first.date);
  const dateSecond = new Date(second.date);

  return Number(dateSecond) - Number(dateFirst);
};
