import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../shared/const';
import PrivateRoute from './private-route';

import Main from '../../pages/main';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFound from '../../pages/not-found';

const AppRoutes = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Main />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
          <Favorites />
        </PrivateRoute>
      }
      />
      <Route path={AppRoute.Offer} element={<Offer />} />
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
