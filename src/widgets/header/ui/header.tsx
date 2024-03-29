import { Link } from 'react-router-dom';
import { AuthorizationStatus } from '../../../shared/const';
import { getAuthorizationStatus } from '../../../mocks/authorization-status';
import { AppRoute } from '../../../shared/const';
import Logo from '../../../shared/ui/logo';

type HeaderProps = {
  withToolbar?: boolean;
  activeLogo?: boolean;
}

const Header = ({ withToolbar = true, activeLogo = false }: HeaderProps): JSX.Element => {
  const authorizationStatus = getAuthorizationStatus();

  if (!withToolbar) {
    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo
                type="header"
                to={AppRoute.Root}
              />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo
              type="header"
              isActive={activeLogo}
              to={AppRoute.Root}
            />
          </div>
          <nav className="header__nav">

            <ul className="header__nav-list">

              {authorizationStatus === AuthorizationStatus.Auth ?
                (
                  <>
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">3</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <Link className="header__nav-link" to="/">
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                )}

            </ul>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
