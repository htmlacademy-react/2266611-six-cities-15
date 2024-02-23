import Header from '../../widgets/header';
import Place from '../../widgets/place';
import NearPlaces from '../../widgets/near-places';

const Offer = (): JSX.Element => (
  <div className="page">
    <Header />
    <main className="page__main page__main--offer">
      <Place />
      <div className="container">
        <NearPlaces />
      </div>
    </main>
  </div>
);

export default Offer;
