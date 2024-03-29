import { options } from '../const/const';

const Sort = (): JSX.Element => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by</span>
    <span className="places__sorting-type" tabIndex={0}>
      Popular
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      {options.map((option) => (
        <li key={option} className="places__option" tabIndex={0}>{option}</li>
      ))}
    </ul>
  </form>
);

export default Sort;
