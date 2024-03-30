import clsx from 'clsx';
import { changeCity, CITIES } from '../../../entities/city';
import { getCurrentCity } from '../../../shared/lib/redux';
import { useAppDispatch, useAppSelector } from '../../../shared/lib/redux';
import { TCity } from '../../../shared/types/offer';

const Filter = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCurrentCity);

  const handleTabClick = (city: TCity) => dispatch(changeCity(city));

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city.name} className="locations__item">
              <a
                className={clsx('locations__item-link tabs__item', { 'tabs__item--active': city.name === currentCity.name })}
                onClick={() => handleTabClick(city)}
                href="#"
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Filter;
