import { useActionCreators, useAppSelector, getAuthorizationStatus } from '../shared/lib/redux';
import { userActions } from '../entities/user';
import { offersActions } from '../entities/offers';
import { useEffect } from 'react';
import { AuthorizationStatus } from '../shared/enum';

import AppRoutes from './router/app-routes';

const App = (): JSX.Element => {
  const { checkAuthAction } = useActionCreators(userActions);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const { fetchFavoriteOffers, fetchPreviewOffers } = useActionCreators(offersActions);

  useEffect(() => {
    checkAuthAction();

    if (authorizationStatus === AuthorizationStatus.Auth) {
      fetchFavoriteOffers();
      return;
    }

    fetchPreviewOffers().unwrap();
  }, [
    checkAuthAction,
    fetchFavoriteOffers,
    fetchPreviewOffers,
    authorizationStatus
  ]);

  return (
    <AppRoutes />
  );
};

export default App;
