import Authorization from '../../widgets/authorization';
import Logo from '../../shared/ui/logo';

const Login = (): JSX.Element => (
  <div className="page page--gray page--login">

    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
        </div>
      </div>
    </header>

    <main className="page__main page__main--login">
      <Authorization />
    </main>
  </div>
);

export default Login;
