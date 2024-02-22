import Header from '../../widgets/header';
import Footer from '../../widgets/footer';
import SavedList from '../../widgets/saved-list';

const Favorites = (): JSX.Element => (
  <div className="page">
    <Header />
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <SavedList />
      </div>
    </main>
    <Footer />
  </div>
);

export default Favorites;
