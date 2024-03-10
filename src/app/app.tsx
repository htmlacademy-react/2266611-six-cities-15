import AppRoutes from './router/app-routes';
import { Place } from '../shared/types/places';

type AppProps = {
  offers: Place[];
}

const App = ({ offers }: AppProps): JSX.Element => (
  <AppRoutes
    offers={offers}
  />
);

export default App;
