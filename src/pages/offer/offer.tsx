import { Navigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../shared/const';
import { useAppSelector, getFullOffer, useActionCreators } from '../../shared/lib/redux';
import { useEffect } from 'react';
import { offersActions } from '../../entities/offers';

import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import FullOffer from '../../widgets/full-offer';
import NearOffers from '../../widgets/near-offers';

const Offer = (): JSX.Element => {
  const { id: offerId } = useParams();
  const currentOffer = useAppSelector(getFullOffer);
  const { fetchFullOffer } = useActionCreators(offersActions);

  useEffect(() => {
    fetchFullOffer(String(offerId)).unwrap();
  }, [fetchFullOffer, offerId]);

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
