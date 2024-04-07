import clsx from 'clsx';
import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../shared/enum';
import { useAppSelector, useActionCreators, getCurrentCity } from '../../../shared/lib/redux';
import { TCity } from '../../../shared/types/offer';
import { cityActions, CITIES } from '../../../entities/city';

const Filter = (): JSX.Element => {
  const { changeCity } = useActionCreators(cityActions);
  const currentCity = useAppSelector(getCurrentCity);

  const handleTabClick = useCallback((city: TCity) => {
    changeCity(city);
  }, [changeCity]);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city.name} className="locations__item">
              <Link
                className={clsx('locations__item-link tabs__item', { 'tabs__item--active': city.name === currentCity.name })}
                onClick={() => handleTabClick(city)}
                to={AppRoute.Root}
              >
                <span>{city.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const MemoizedFilter = memo(Filter);

export default MemoizedFilter;
