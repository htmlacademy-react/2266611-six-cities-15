import { Link } from 'react-router-dom';
import { AppRoute } from '../../../shared/enum';
import { useCallback } from 'react';
import { useActionCreators } from '../../../shared/lib/redux';
import { cityActions, CITIES } from '../../../entities/city';

type LocationProps = {
  city: string;
}

const Location = ({ city }: LocationProps): JSX.Element => {
  const { changeCity } = useActionCreators(cityActions);
  const selectedCity = CITIES.filter((item) => item.name === city);

  const handleLinkClick = useCallback(() => {
    changeCity(selectedCity[0]);
  }, [changeCity, selectedCity]);

  return (
    <div className="locations__item">
      <Link
        className="locations__item-link"
        to={AppRoute.Root}
        onClick={handleLinkClick}
      >
        <span>{city}</span>
      </Link>
    </div>
  );
};

export default Location;
