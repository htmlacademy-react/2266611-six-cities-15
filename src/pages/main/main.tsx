import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import Filter from '../../features/filter';
import AllOffers from '../../widgets/all-offers';
import { PreviewOfferType } from '../../shared/types/offer';

type MainProps = {
  offers: PreviewOfferType[];
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
        <AllOffers offers={offers} />
      </main>
    }
    footer={false}
  />
);

export default Main;
