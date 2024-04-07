import { AppRoute } from '../../../shared/enum';
import { memo, useEffect } from 'react';
import { useActionCreators, useAppSelector, getAuthorizationStatus } from '../../../shared/lib/redux';
import { offersActions } from '../../../entities/offers';
import { AuthorizationStatus } from '../../../shared/enum';

import MemoizedLogo from '../../../shared/ui/logo';
import MemoizedToolbar from '../../../features/toolbar';

type HeaderProps = {
  withToolbar?: boolean;
  activeLogo?: boolean;
}

const Header = ({ withToolbar = true, activeLogo = false }: HeaderProps): JSX.Element => {
  const { fetchFavoriteOffers } = useActionCreators(offersActions);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      fetchFavoriteOffers().unwrap();
    }
  }, [fetchFavoriteOffers, authorizationStatus]);

  if (!withToolbar) {
    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <MemoizedLogo
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
            <MemoizedLogo
              type="header"
              isActive={activeLogo}
              to={AppRoute.Root}
            />
          </div>
          {<MemoizedToolbar />}
        </div>
      </div>
    </header>
  );
};

const MemoizedHeader = memo(Header);

export default MemoizedHeader;
