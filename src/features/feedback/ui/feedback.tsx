import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { RATINGS, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../const';
import { useActionCreators, useAppSelector } from '../../../shared/lib/redux';
import { getAddCommentStatusObject } from '../../../shared/lib/redux';
import { reviewsActions } from '../../../entities/reviews';
import styles from './styles.module.css';

import FormRating from '../../../shared/ui/form-rating';

type FeedbackProps = {
  offerId: string;
}

const Feedback = ({ offerId }: FeedbackProps): JSX.Element => {
  const { addReview } = useActionCreators(reviewsActions);
  const addCommentStatus = useAppSelector(getAddCommentStatusObject);

  const [formError, setFormError] = useState(false);
  const [formData, setFormData] = useState({
    rating: '0',
    review: ''
  });

  const handleFormDataChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    addReview({
      offerId,
      comment: formData.review,
      rating: +formData.rating
    });
  };

  const clearFormData = () => setFormData({
    rating: '0',
    review: ''
  });

  useEffect(() => {
    if (addCommentStatus.isSucceeded) {
      clearFormData();
    }

    if (addCommentStatus.isFailed) {
      setFormError(true);
    }
  }, [addCommentStatus]);

  const isFormInvalid = formData.review.length < MIN_COMMENT_LENGTH || +formData.rating === 0;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {RATINGS.map(({ value, title }) => (
          <FormRating
            key={title}
            title={title}
            value={value}
            checked={value === formData.rating}
            onChange={handleFormDataChange}
            disabled={addCommentStatus.isLoading}
          />
        ))}
      </div>
      <div className={styles.wrapper}>
        <textarea
          className="reviews__textarea form__textarea"
          name="review"
          id="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          maxLength={MAX_COMMENT_LENGTH}
          value={formData.review}
          onChange={handleFormDataChange}
          disabled={addCommentStatus.isLoading}
        >
        </textarea>
        {formError && <span className={styles.text}>Oops... Something went wrong. Please try again.</span>}
      </div>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={addCommentStatus.isLoading || isFormInvalid}
        >
          {addCommentStatus.isLoading ? 'Sending...' : 'Submit'}
        </button>
      </div>

    </form>
  );
};

export default Feedback;
