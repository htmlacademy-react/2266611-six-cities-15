import { TComment } from '../../../shared/types/comment';

export const sortByDate = (first: TComment, second: TComment) => {
  const dateFirst = new Date(first.date);
  const dateSecond = new Date(second.date);

  return Number(dateSecond) - Number(dateFirst);
};
