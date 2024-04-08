import { getSortedOffersByCity } from '../lib/get-sorted-offers-by-city';
import { offersActions } from '../../../entities/offers';
import { useCallback } from 'react';
import {
  useAppSelector,
  getFavoriteOffers,
  getFavoriteOffersStatusObject,
  useActionCreators
} from '../../../shared/lib/redux';

import MemoizedCard from '../../../entities/card';
import MemoizedBookmark from '../../../features/bookmark';
import EmptySavedList from './empty-saved-list';
import ServerError from '../../../shared/ui/server-error';
import Location from '../../../features/location';

const SavedList = (): JSX.Element => {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoriteOffersStatus = useAppSelector(getFavoriteOffersStatusObject);
  const favoriteSortedOffers = getSortedOffersByCity(favoriteOffers);
  const { fetchFavoriteOffers } = useActionCreators(offersActions);

  const isEmpty = favoriteOffers.length === 0;

  const handleRefreshClick = useCallback(() => {
    fetchFavoriteOffers();
  }, [fetchFavoriteOffers]);

  if (favoriteOffersStatus.isFailed) {
    return <ServerError callback={handleRefreshClick} />;
  }

  if (isEmpty) {
    return <EmptySavedList />;
  }

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <ul className="favorites__list">
        {Object.entries(favoriteSortedOffers).map(([name, offersList]) => (
          <li key={name} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <Location city={name} />
            </div>
            <div className="favorites__places">
              {offersList.map((offer) => (
                <MemoizedCard
                  key={offer.id}
                  offer={offer}
                  sectionName="favorites"
                  userAction={
                    <MemoizedBookmark
                      sectionName="place-card"
                      offerId={offer.id}
                      isFavorite={offer.isFavorite}
                    />
                  }
                />
              ))}
            </div>
          </li>
        ))}
      </ul>

    </section>
  );
};

export default SavedList;
