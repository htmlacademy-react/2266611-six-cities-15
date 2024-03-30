import clsx from 'clsx';
import { useState } from 'react';
import { SORT_OPTIONS } from '../../../entities/offers';
import { useAppDispatch, useAppSelector, getCurrentSortOption } from '../../../shared/lib/redux';
import { changeSortOption } from '../../../entities/offers';
import { useOutsideClick } from '../../../shared/lib/react/hooks/use-outside-click';

const Sort = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentSortOption = useAppSelector(getCurrentSortOption);
  const [isOpenedSortOptions, setIsOpenedSortOptions] = useState(false);

  const handleSortOptionChange = (option: string) => {
    dispatch(changeSortOption(option));
    setIsOpenedSortOptions(false);
  };

  const handleSortOptionClick = () => setIsOpenedSortOptions(true);

  const sortRef = useOutsideClick(() => setIsOpenedSortOptions(false));

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" style={{ marginRight: '4px' }}>Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleSortOptionClick}
      >
        {currentSortOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <div ref={sortRef}>
        <ul className={clsx('places__options places__options--custom', { 'places__options--opened': isOpenedSortOptions })}>
          {SORT_OPTIONS.map((option) => (
            <li
              key={option}
              className={clsx('places__option', { 'places__option--active': option === currentSortOption })}
              tabIndex={0}
              onClick={() => handleSortOptionChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
};

export default Sort;
