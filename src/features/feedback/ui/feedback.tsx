import { useState, ChangeEvent, FormEvent } from 'react';
import { ratings, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH } from '../const/const';
import FormRating from '../../../shared/ui/form-rating';

const Feedback = (): JSX.Element => {
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
  };

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
        {ratings.map(({ value, title }) => (
          <FormRating
            key={title}
            title={title}
            value={value}
            checked={value === formData.rating}
            onChange={handleFormDataChange}
          />
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        name="review"
        id="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        maxLength={MAX_COMMENT_LENGTH}
        value={formData.review}
        onChange={handleFormDataChange}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isFormInvalid}
        >
        Submit
        </button>
      </div>

    </form>
  );
};

export default Feedback;
