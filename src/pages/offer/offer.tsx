import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../shared/const';
import { useAppSelector, getFullOffers } from '../../shared/lib/redux';

import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import FullOffer from '../../widgets/full-offer';
import NearOffers from '../../widgets/near-offers';

const Offer = (): JSX.Element => {
  const { id: offerId } = useParams();
  const fullOffers = useAppSelector(getFullOffers);
  const currentOffer = fullOffers.find((offer) => offer.id === offerId);

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

          <FullOffer
            currentOffer={currentOffer}
          />

          <div className="container">
            <NearOffers
              currentOffer={currentOffer}
            />
          </div>

        </main>
      }
      footer={false}
    />
  );
};

export default Offer;
