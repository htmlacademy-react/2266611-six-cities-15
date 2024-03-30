import clsx from 'clsx';
import { useAppSelector } from '../../shared/lib/redux';
import { getCurrentOffers } from '../../entities/offers';

import Layout from '../../shared/layout';
import Header from '../../widgets/header';
import Filter from '../../features/filter';
import AllOffers from '../../widgets/all-offers';

const Main = (): JSX.Element => {
  const currentOffers = useAppSelector(getCurrentOffers);

  return (
    <Layout
      wrapper="page page--gray page--main"
      title="6 cities"
      header={<Header activeLogo />}
      content={
        <main className={clsx('page__main page__main--index', { 'page__main--index-empty': !currentOffers.length })}>
          <h1 className="visually-hidden">Cities</h1>
          <Filter />
          <AllOffers />
        </main>
      }
      footer={false}
    />
  );
};

export default Main;
