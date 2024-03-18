import { PreviewOfferType } from '../../../shared/types/offer';
import { getSortedOffersByCity } from '../lib/get-sorted-offers-by-city';
import Card from '../../../entities/card';
import Bookmark from '../../../features/bookmark';

type SavedListProps = {
  offers: PreviewOfferType[];
}

const SavedList = ({ offers }: SavedListProps): JSX.Element => {
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
                <Card
                  key={offer.id}
                  offer={offer}
                  sectionName="favorites"
                  userAction={
                    <Bookmark
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
