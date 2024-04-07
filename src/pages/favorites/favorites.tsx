import clsx from 'clsx';
import { useAppSelector, getFavoriteOffersStatusObject } from '../../shared/lib/redux';

import Layout from '../../shared/layout';
import MemoizedHeader from '../../widgets/header';
import MemoizedFooter from '../../widgets/footer';
import SavedList from '../../widgets/saved-list';
import HeartLoader from '../../shared/ui/loader/heart-loader';

const Favorites = (): JSX.Element => {
  const favoriteStatus = useAppSelector(getFavoriteOffersStatusObject);
  const isLoading = favoriteStatus.isUncompleted;

  return (
    <Layout
      wrapper={clsx('page', { 'page--main': isLoading })}
      title="6 cities: favorites"
      header={<MemoizedHeader />}
      content={
        <main className={clsx('page__main', { 'page__main--index': isLoading, 'page__main--favorites': !isLoading })}>
          <div className="page__favorites-container container">
            {isLoading && <HeartLoader />}
            {!isLoading && <SavedList />}
          </div>
        </main>
      }
      footer={<MemoizedFooter />}
    />
  );
};

export default Favorites;
