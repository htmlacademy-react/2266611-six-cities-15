import { useState, ChangeEvent, FormEvent, useEffect, useCallback } from 'react';
import { RATINGS, CommentLength } from '../const';
import { useActionCreators, useAppSelector, getAddCommentStatusObject } from '../../../shared/lib/redux';
import { reviewsActions } from '../../../entities/reviews';
import { ToastMessage, ToastId } from '../../../shared/enum';
import { toast } from 'react-toastify';

import MemoizedFormRating from '../../../shared/ui/form-rating';

type FeedbackProps = {
  offerId: string;
}

const Feedback = ({ offerId }: FeedbackProps): JSX.Element => {
  const { addReview } = useActionCreators(reviewsActions);
  const addCommentStatus = useAppSelector(getAddCommentStatusObject);

  const [formData, setFormData] = useState({
    rating: '0',
    review: ''
  });

  const handleFormDataChange = useCallback((evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }, [formData]);

  const handleFormSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    addReview({
      offerId,
      comment: formData.review,
      rating: +formData.rating
    });
  }, [addReview, formData, offerId]);

  const clearFormData = () => setFormData({
    rating: '0',
    review: ''
  });

  useEffect(() => {
    if (addCommentStatus.isSucceeded) {
      clearFormData();
    }

    if (addCommentStatus.isFailed) {
      toast.error(ToastMessage.SomethingWrong, { toastId: ToastId.Comment });
    }
  }, [addCommentStatus]);

  const isFormInvalid = formData.review.length > CommentLength.Max || formData.review.length < CommentLength.Min || +formData.rating === 0;

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
          <MemoizedFormRating
            key={title}
            title={title}
            value={value}
            checked={value === formData.rating}
            onChange={handleFormDataChange}
            disabled={addCommentStatus.isLoading}
          />
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        name="review"
        id="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.review}
        onChange={handleFormDataChange}
        disabled={addCommentStatus.isLoading}
      >
      </textarea>


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
