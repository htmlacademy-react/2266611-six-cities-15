import { getRandomItemFromArray } from '../../../shared/lib/utils';
import { CITIES } from '../../../entities/city/const';

import Register from '../../../features/register';
import Location from '../../../features/location';

const Authorization = (): JSX.Element => {
  const randomCity = getRandomItemFromArray(CITIES);
  const { name: city } = randomCity;

  return (
    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <Register />
      </section>
      <section className="locations locations--login locations--current">
        <Location city={city} />
      </section>
    </div>
  );
};

export default Authorization;
