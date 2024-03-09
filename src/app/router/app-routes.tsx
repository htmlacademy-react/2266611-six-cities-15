import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../shared/const';
import { ScrollToTop } from '../../shared/lib';
import { getAuthorizationStatus } from '../../mocks/authorization-status';
import { Place } from '../../shared/types/places';

import PrivateRoute from './private-route';
import Main from '../../pages/main';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFound from '../../pages/not-found';

type AppRoutesProps = {
  offers: Place[];
}

const AppRoutes = ({ offers }: AppRoutesProps): JSX.Element => (
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Root} element={<Main offers={offers} />} />
        <Route path={AppRoute.Login} element={
          <PrivateRoute authorizationStatus={getAuthorizationStatus()} isReverse>
            <Login />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute authorizationStatus={getAuthorizationStatus()}>
            <Favorites />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<Offer />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default AppRoutes;
