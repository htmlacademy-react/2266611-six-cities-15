import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { offersActions } from '../../entities/offers';
import { reviewsActions } from '../../entities/reviews';
import {
  getFullOfferStatusObject,
  getNearbyOffersStatusObject,
  getCommentsStatusObject,
  useAppSelector,
  useActionCreators
} from '../../shared/lib/redux';

import Layout from '../../shared/layout';
import MemoizedHeader from '../../widgets/header';
import FullOffer from '../../widgets/full-offer';
import NearOffers from '../../widgets/near-offers';
import SquareLoader from '../../shared/ui/loader/square-loader';

const Offer = (): JSX.Element => {
  const { id: offerId } = useParams();
  const { fetchReviews } = useActionCreators(reviewsActions);
  const {
    fetchPreviewOffers,
    fetchFullOffer,
    fetchNearbyOffers,
    setActiveId
  } = useActionCreators(offersActions);

  const fullOfferStatus = useAppSelector(getFullOfferStatusObject);
  const nearbyOfferStatus = useAppSelector(getNearbyOffersStatusObject);
  const commentsStatus = useAppSelector(getCommentsStatusObject);
  const isLoading = fullOfferStatus.isUncompleted || nearbyOfferStatus.isUncompleted || commentsStatus.isUncompleted;

  useEffect(() => {
    Promise.all([
      setActiveId(String(offerId)),
      fetchFullOffer(String(offerId)),
      fetchNearbyOffers(String(offerId)),
      fetchReviews(String(offerId)),
      fetchPreviewOffers()
    ]);
  }, [
    setActiveId,
    fetchFullOffer,
    fetchNearbyOffers,
    fetchReviews,
    fetchPreviewOffers,
    offerId
  ]);

  return (
    <Layout
      wrapper={clsx('page', { 'page--main': isLoading })}
      title="6 cities: offer"
      header={<MemoizedHeader />}
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
