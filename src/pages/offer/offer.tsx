import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { APIStatus } from '../../shared/const';
import { useAppSelector, useActionCreators } from '../../shared/lib/redux';
import { useEffect } from 'react';
import { offersActions } from '../../entities/offers';
import { reviewsActions } from '../../entities/reviews';
import { getFullOfferStatus, getNearbyOffersStatus, getCommentsStatus } from '../../shared/lib/redux';

import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import FullOffer from '../../widgets/full-offer';
import NearOffers from '../../widgets/near-offers';
import SquareLoader from '../../shared/ui/loader/square-loader';

const Offer = (): JSX.Element => {
  const { id: offerId } = useParams();
  const { fetchFullOffer, fetchNearbyOffers } = useActionCreators(offersActions);
  const { fetchReviews } = useActionCreators(reviewsActions);

  const offerStatus = useAppSelector(getFullOfferStatus);
  const nearbyOfferStatus = useAppSelector(getNearbyOffersStatus);
  const commentsStatus = useAppSelector(getCommentsStatus);
  const isLoading = offerStatus && nearbyOfferStatus && commentsStatus === APIStatus.Loading;

  useEffect(() => {
    fetchFullOffer(String(offerId)).unwrap();
    fetchNearbyOffers(String(offerId)).unwrap();
    fetchReviews(String(offerId)).unwrap();
  }, [offerId, fetchFullOffer, fetchNearbyOffers, fetchReviews]);

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
