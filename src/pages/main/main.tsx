import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import Filter from '../../features/filter';
import AllPlaces from '../../widgets/all-places';
import { Place } from '../../shared/types/places';

type MainProps = {
  offers: Place[];
};

const Main = ({ offers }: MainProps): JSX.Element => (
  <Layout
    wrapper="page page--gray page--main"
    title="6 cities"
    header={<Header activeLogo />}
    content={
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Filter />
        <AllPlaces offers={offers} />
      </main>
    }
    footer={false}
  />
);

export default Main;
