import AppRoutes from './router/app-routes';
import { OfferType } from '../shared/types/offer';

type AppProps = {
  offers: OfferType[];
}

const App = ({ offers }: AppProps): JSX.Element => (
  <AppRoutes
    offers={offers}
  />
);

export default App;
