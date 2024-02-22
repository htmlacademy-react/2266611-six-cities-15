import Header from '../../widgets/header';
import Filter from '../../features/filter';
import AllPlaces from '../../widgets/all-places';

const Main = (): JSX.Element => (
  <div className="page page--gray page--main">
    <Header />
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Filter />
      <AllPlaces />
    </main>
  </div>
);

export default Main;
