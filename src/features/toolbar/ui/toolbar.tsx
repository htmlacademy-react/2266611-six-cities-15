import {
  useAppSelector,
  getUserData,
  getFavoriteOffers,
  getAuthorizationStatus,
  useActionCreators
} from '../../../shared/lib/redux';
import { AuthorizationStatus, AppRoute } from '../../../shared/enum';
import { userActions } from '../../../entities/user';
import { useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Toolbar = (): JSX.Element => {
  const location = useLocation();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const userData = useAppSelector(getUserData);
  const { logoutAction } = useActionCreators(userActions);

  const handleSignOutClick = useCallback(() => {
    logoutAction();
  }, [logoutAction]);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">

        {authorizationStatus === AuthorizationStatus.Auth ?
          (
            <>
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"
                    style={{
                      backgroundImage: `url(${userData?.avatarUrl ?? '../img/avatar.svg'})`,
                      borderRadius: '50%'
                    }}
                  >
                  </div>
                  <span className="header__user-name user__name">{userData?.email}</span>
                  <span className="header__favorite-count">{favoriteOffers.length}</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  className="header__nav-link"
                  to={location.pathname}
                  onClick={handleSignOutClick}
                >
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </>
          ) : (
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoute.Login}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__login">Sign in</span>
              </Link>
            </li>
          )}

      </ul>
    </nav>
  );
};

const MemoizedToolbar = memo(Toolbar);

export default MemoizedToolbar;
