import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import MemoizedFooter from '../../widgets/footer';
import SavedList from '../../widgets/saved-list';

const Favorites = (): JSX.Element => (
  <Layout
    wrapper="page"
    title="6 cities: favorites"
    header={<Header />}
    content={
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <SavedList />
        </div>
      </main>
    }
    footer={<MemoizedFooter />}
  />
);

export default Favorites;
