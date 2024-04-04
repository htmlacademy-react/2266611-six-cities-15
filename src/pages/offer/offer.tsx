import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { APIStatus } from '../../shared/const';
import { useAppSelector, useActionCreators } from '../../shared/lib/redux';
import { useEffect } from 'react';
import { offersActions } from '../../entities/offers';
import { getFullOfferStatus } from '../../shared/lib/redux';

import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import FullOffer from '../../widgets/full-offer';
import NearOffers from '../../widgets/near-offers';
import SquareLoader from '../../shared/ui/loader/square-loader';

const Offer = (): JSX.Element => {
  const { id: offerId } = useParams();
  const { fetchFullOffer } = useActionCreators(offersActions);
  const status = useAppSelector(getFullOfferStatus);
  const isLoading = status === APIStatus.Loading;

  useEffect(() => {
    fetchFullOffer(String(offerId)).unwrap();
  }, [offerId, fetchFullOffer]);

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
