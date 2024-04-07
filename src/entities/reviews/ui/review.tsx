import dayjs from 'dayjs';
import { memo } from 'react';
import { TComment } from '../../../shared/types/comment';

import MemoizedStarRating from '../../../shared/ui/star-rating';

type ReviewProps = {
  sortedComment: TComment;
}

const Review = ({ sortedComment }: ReviewProps): JSX.Element => {
  const { comment, date, rating, user } = sortedComment;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <MemoizedStarRating sectionName="reviews" rating={rating} />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(date).format('YYYY-MM-DD')}>
          {dayjs(date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  );
};

const MemoizedReview = memo(Review);

export default MemoizedReview;
