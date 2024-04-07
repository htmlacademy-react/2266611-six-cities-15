import { getSortedOffersByCity } from '../lib/get-sorted-offers-by-city';
import { useAppSelector, getPreviewOffers } from '../../../shared/lib/redux';

import MemoizedCard from '../../../entities/card';
import MemoizedBookmark from '../../../features/bookmark';

const SavedList = (): JSX.Element => {
  const offers = useAppSelector(getPreviewOffers);
  const favoriteOffers = getSortedOffersByCity(offers);

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>

      <ul className="favorites__list">
        {Object.entries(favoriteOffers).map(([name, offersList]) => (
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
