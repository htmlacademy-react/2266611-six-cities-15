import { Link, useLocation, useParams } from 'react-router-dom';
import { AppRoute } from '../../../shared/enum';
import {
  useAppSelector,
  useActionCreators,
  getUserData,
  getFavoriteOffers
} from '../../../shared/lib/redux';
import { offersActions } from '../../../entities/offers';
import { userActions } from '../../../entities/user';
import { useCallback } from 'react';

const ToolbarLoggedIn = (): JSX.Element => {
  const { id: offerId } = useParams();
  const location = useLocation();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const userData = useAppSelector(getUserData);
  const { logoutAction } = useActionCreators(userActions);
  const { clearFavorites, fetchPreviewOffers, fetchFullOffer } = useActionCreators(offersActions);

  const handleSignOutClick = useCallback(() => {
    logoutAction().then(() => {
      clearFavorites();
      fetchPreviewOffers();
      if (offerId) {
        fetchFullOffer(offerId);
      }
    });
  }, [
    logoutAction,
    clearFavorites,
    fetchPreviewOffers,
    fetchFullOffer,
    offerId
  ]);

  return (
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
  );
};

export default ToolbarLoggedIn;
