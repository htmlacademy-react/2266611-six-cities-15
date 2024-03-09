import AppRoutes from './router/app-routes.tsx';
import { Place } from '../shared/types/places.ts';

type AppProps = {
  offers: Place[];
}

const App = ({offers}: AppProps): JSX.Element => (
  <AppRoutes
    offers={offers}
  />
);

export default App;
