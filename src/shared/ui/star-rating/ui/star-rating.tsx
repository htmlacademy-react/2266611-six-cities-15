import clsx from 'clsx';
import { calculateRatingPercent } from '../lib/calculate-rating-percent';

type StarRatingProps = {
  sectionName: string;
  rating: number;
  hasInitialValue?: boolean;
}

const StarRating = ({ sectionName, rating, hasInitialValue = false }: StarRatingProps): JSX.Element => (
  <div className={clsx(`${sectionName}__rating`, 'rating')}>
    <div className={clsx(`${sectionName}__stars`, 'rating__stars')}>
      <span style={{ width: `${calculateRatingPercent(rating)}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>

    {hasInitialValue && (
      <span className={clsx(`${sectionName}__rating-value`, 'rating__value')}>
        {rating}
      </span>
    )}
  </div>
);

export default StarRating;
