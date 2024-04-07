import { getSortedOffersByCity } from '../lib/get-sorted-offers-by-city';
import { useAppSelector, getFavoriteOffers } from '../../../shared/lib/redux';

import MemoizedCard from '../../../entities/card';
import MemoizedBookmark from '../../../features/bookmark';
import EmptySavedList from './empty-saved-list';

const SavedList = (): JSX.Element => {
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const favoriteSortedOffers = getSortedOffersByCity(favoriteOffers);
  const isEmpty = favoriteOffers.length === 0;

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
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{name}</span>
                </a>
              </div>
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
