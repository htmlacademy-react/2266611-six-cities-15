import Register from '../../../features/register';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../shared/const';

const Authorization = (): JSX.Element => (
  <div className="page__login-container container">
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <Register />
    </section>
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={AppRoute.Root}>
          <span>Amsterdam</span>
        </Link>
      </div>
    </section>
  </div>
);

export default Authorization;
