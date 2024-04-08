import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../shared/enum';
import { ScrollToTop } from '../../shared/lib/react';
import { useAppSelector, getAuthorizationStatus } from '../../shared/lib/redux';
import { HistoryRouter } from './history-router';
import { browserHistory } from '../browser-history';

import PrivateRoute from './private-route';
import Main from '../../pages/main';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFound from '../../pages/not-found';

const AppRoutes = (): JSX.Element => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root} element={<Main />} />
          <Route path={AppRoute.Login} element={
            <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
              <Login />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Offer} element={<Offer />} />
          <Route path={AppRoute.NotFound} element={<NotFound />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
};

export default AppRoutes;
