import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import Footer from '../../widgets/footer';
import SavedList from '../../widgets/saved-list';
import { PreviewOfferType } from '../../shared/types/offer';

type FavoritesProps = {
  offers: PreviewOfferType[];
}

const Favorites = ({ offers }: FavoritesProps): JSX.Element => (
  <Layout
    wrapper="page"
    title="6 cities: favorites"
    header={<Header />}
    content={
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <SavedList offers={offers}/>
        </div>
      </main>
    }
    footer={<Footer />}
  />
);

export default Favorites;
