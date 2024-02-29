import Layout from '../../shared/layouts';
import Header from '../../widgets/header';
import Place from '../../widgets/place';
import NearPlaces from '../../widgets/near-places';

const Offer = (): JSX.Element => (
  <Layout
    wrapper="page"
    title="6 cities: offer"
    header={<Header />}
    content={
      <main className="page__main page__main--offer">
        <Place />
        <div className="container">
          <NearPlaces />
        </div>
      </main>
    }
    footer={false}
  />
);

export default Offer;
