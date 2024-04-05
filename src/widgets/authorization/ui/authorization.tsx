import { Link } from 'react-router-dom';
import { AppRoute } from '../../../shared/const';
import { getRandomItemFromArray } from '../../../shared/lib/utils';
import { CITIES } from '../../../entities/city/const';
import { useActionCreators } from '../../../shared/lib/redux';
import { cityActions } from '../../../entities/city';

import Register from '../../../features/register';

const Authorization = (): JSX.Element => {
  const { changeCity } = useActionCreators(cityActions);
  const randomCity = getRandomItemFromArray(CITIES);
  const { name: city } = randomCity;

  const handleLinkClick = () => {
    changeCity(randomCity);
  };

  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <Register />
      </section>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <Link
            className="locations__item-link"
            to={AppRoute.Root}
            onClick={handleLinkClick}
          >
            <span>{city}</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Authorization;
