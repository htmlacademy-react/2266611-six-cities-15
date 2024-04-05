import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../shared/enum';
import { cityActions, CITIES } from '../../../entities/city';
import { getCurrentCity } from '../../../shared/lib/redux';
import { useAppSelector, useActionCreators } from '../../../shared/lib/redux';
import { TCity } from '../../../shared/types/offer';

const Filter = (): JSX.Element => {
  const { changeCity } = useActionCreators(cityActions);
  const currentCity = useAppSelector(getCurrentCity);

  const handleTabClick = (city: TCity) => changeCity(city);

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

export default Filter;
