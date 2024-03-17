import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../shared/const';
import { ScrollToTop } from '../../shared/lib';
import { getAuthorizationStatus } from '../../mocks/authorization-status';
import { OfferType } from '../../shared/types/offer';
import { Comment } from '../../shared/types/comment';

import PrivateRoute from './private-route';
import Main from '../../pages/main';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFound from '../../pages/not-found';

type AppRoutesProps = {
  offers: OfferType[];
  comments: Comment[];
}

const AppRoutes = ({ offers, comments }: AppRoutesProps): JSX.Element => (
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
            <Favorites offers={offers} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<Offer offers={offers} comments={comments} />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);

export default AppRoutes;
