import {
  useAppSelector,
  getUserData,
  getAuthorizationStatus,
  useActionCreators
} from '../../../shared/lib/redux';
import { userActions } from '../../../entities/user';
import { useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../../shared/enum';

const Toolbar = (): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);
  const { logOutAction } = useActionCreators(userActions);

  const handleSignOutClick = useCallback(() => {
    logOutAction();
  }, [logOutAction]);

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
                  <span className="header__favorite-count">3</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  className="header__nav-link"
                  to="/"
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
