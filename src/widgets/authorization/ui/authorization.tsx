import Register from '../../../features/register';

const Authorization = (): JSX.Element => (
  <div className="page__login-container container">
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <Register />
    </section>
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>Amsterdam</span>
        </a>
      </div>
    </section>
  </div>
);

export default Authorization;
