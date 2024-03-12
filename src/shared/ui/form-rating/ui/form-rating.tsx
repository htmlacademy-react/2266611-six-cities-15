import { ChangeEvent } from 'react';

type FormRatingProps = {
  value: string;
  title: string;
  checked: boolean;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const FormRating = ({value, title, checked, onChange}: FormRatingProps): JSX.Element => {
  const starsCount = `${value}-stars`;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={starsCount}
        type="radio"
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={starsCount}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
};

export default FormRating;
