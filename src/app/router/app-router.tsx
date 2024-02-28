import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../shared/const';

import Main from '../../pages/main';
import Login from '../../pages/login';
import Favorites from '../../pages/favorites';
import Offer from '../../pages/offer';
import NotFound from '../../pages/not-found';

const AppRouter = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<Main />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Favorites} element={<Favorites />} />
      <Route path={AppRoute.Offer} element={<Offer />} />
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
