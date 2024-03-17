import AppRoutes from './router/app-routes';
import { OfferType } from '../shared/types/offer';
import { Comment } from '../shared/types/comment';

type AppProps = {
  offers: OfferType[];
  comments: Comment[];
}

const App = ({ offers, comments }: AppProps): JSX.Element => (
  <AppRoutes
    offers={offers}
    comments={comments}
  />
);

export default App;
