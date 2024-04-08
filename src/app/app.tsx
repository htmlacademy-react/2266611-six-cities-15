import { useActionCreators, useAppSelector, getAuthorizationStatus } from '../shared/lib/redux';
import { userActions } from '../entities/user';
import { offersActions } from '../entities/offers';
import { useEffect } from 'react';
import { AuthorizationStatus } from '../shared/enum';

import AppRoutes from './router/app-routes';

const App = (): JSX.Element => {
  const { checkAuthAction } = useActionCreators(userActions);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const { fetchFavoriteOffers } = useActionCreators(offersActions);

  useEffect(() => {
    checkAuthAction();

    if (authorizationStatus === AuthorizationStatus.Auth) {
      fetchFavoriteOffers();
    }
  }, [
    checkAuthAction,
    fetchFavoriteOffers,
    authorizationStatus
  ]);

  return (
    <AppRoutes />
  );
};

export default App;
