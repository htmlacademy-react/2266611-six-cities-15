import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import Place from '../../widgets/place';
import NearPlaces from '../../widgets/near-places';
import { getFullOffer } from '../../mocks/full-offers';
import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../shared/const';

const Offer = (): JSX.Element => {
  const { id: offerId } = useParams();
  const currentOffer = getFullOffer(offerId);

  if (!currentOffer) {
    return <Navigate to={AppRoute.NotFound} replace />;
  }

  return (
    <Layout
      wrapper="page"
      title="6 cities: offer"
      header={<Header />}
      content={
        <main className="page__main page__main--offer">

          <Place
            offer={currentOffer}
          />

          <div className="container">
            <NearPlaces />
          </div>

        </main>
      }
      footer={false}
    />
  );
};

export default Offer;
