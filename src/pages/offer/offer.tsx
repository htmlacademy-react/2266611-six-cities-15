import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { useAppSelector, useActionCreators } from '../../shared/lib/redux';
import { useEffect } from 'react';
import { offersActions } from '../../entities/offers';
import { reviewsActions } from '../../entities/reviews';
import { getFullOfferStatusObject, getNearbyOffersStatusObject, getCommentsStatusObject } from '../../shared/lib/redux';

import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import FullOffer from '../../widgets/full-offer';
import NearOffers from '../../widgets/near-offers';
import SquareLoader from '../../shared/ui/loader/square-loader';

const Offer = (): JSX.Element => {
  const { id: offerId } = useParams();
  const { fetchFullOffer, fetchNearbyOffers } = useActionCreators(offersActions);
  const { fetchReviews } = useActionCreators(reviewsActions);

  const fullOfferStatus = useAppSelector(getFullOfferStatusObject);
  const nearbyOfferStatus = useAppSelector(getNearbyOffersStatusObject);
  const commentsStatus = useAppSelector(getCommentsStatusObject);
  const isLoading = fullOfferStatus.isUncompleted || nearbyOfferStatus.isUncompleted || commentsStatus.isUncompleted;

  useEffect(() => {
    Promise.all([
      fetchFullOffer(String(offerId)),
      fetchNearbyOffers(String(offerId)),
      fetchReviews(String(offerId))
    ]);
  }, [fetchFullOffer, fetchNearbyOffers, fetchReviews, offerId]);

  return (
    <Layout
      wrapper={clsx('page', { 'page--main': isLoading })}
      title="6 cities: offer"
      header={<Header />}
      content={
        <main className={clsx('page__main', { 'page__main--index': isLoading, 'page__main--offer': !isLoading })}>

          {isLoading && <SquareLoader />}

          {!isLoading && <FullOffer />}
          {!isLoading &&
          <div className="container">
            <NearOffers />
          </div>}

        </main>
      }
      footer={false}
    />
  );
};

export default Offer;
