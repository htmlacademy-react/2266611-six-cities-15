import clsx from 'clsx';
import { useEffect } from 'react';
import { useAppSelector, getPreviewOffersStatusObject, useActionCreators } from '../../shared/lib/redux';
import { getCurrentOffers, offersActions } from '../../entities/offers';

import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import Filter from '../../features/filter';
import AllOffers from '../../widgets/all-offers';
import BalloonLoader from '../../shared/ui/loader/balloon-loader';

const Main = (): JSX.Element => {
  const currentOffers = useAppSelector(getCurrentOffers);
  const previewOffersStatus = useAppSelector(getPreviewOffersStatusObject);
  const isLoading = previewOffersStatus.isUncompleted;
  const { fetchPreviewOffers } = useActionCreators(offersActions);

  useEffect(() => {
    fetchPreviewOffers().unwrap();
  }, [fetchPreviewOffers]);

  return (
    <Layout
      wrapper="page page--gray page--main"
      title="6 cities"
      header={<Header activeLogo />}
      content={
        <main className={clsx('page__main page__main--index', { 'page__main--index-empty': !currentOffers.length })}>
          <h1 className="visually-hidden">Cities</h1>
          {isLoading && <BalloonLoader />}
          {!isLoading && <Filter />}
          {!isLoading && <AllOffers />}
        </main>
      }
      footer={false}
    />
  );
};

export default Main;
