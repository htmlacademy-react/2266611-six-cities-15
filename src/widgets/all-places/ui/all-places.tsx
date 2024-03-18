import Sort from '../../../features/sort';
import Map from '../../../features/map';
import Bookmark from '../../../features/bookmark';
import Card from '../../../entities/card';
import { PreviewOfferType } from '../../../shared/types/offer';
import { useState } from 'react';
import { Nullable } from 'vitest';

type AllPlacesProps = {
  offers: PreviewOfferType[];
};

const AllPlaces = ({ offers }: AllPlacesProps): JSX.Element => {
  const [activeCard, setActiveCard] = useState<Nullable<PreviewOfferType>>(null);
  const handleCardHover = (offer: Nullable<PreviewOfferType>) => setActiveCard(offer);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <Sort />
          <div className="cities__places-list places__list tabs__content">

            {offers.map((offer) => (
              <Card
                key={offer.id}
                offer={offer}
                sectionName='cities'
                userAction={
                  <Bookmark
                    sectionName="place-card"
                    isFavorite={offer.isFavorite}
                  />
                }
                onCardHover={handleCardHover}
              />
            ))}

          </div>
        </section>
        <div className="cities__right-section">
          <Map
            sectionName="cities"
            offers={offers}
            balloonId={activeCard?.id}
            city={offers[0].city}
          />
        </div>
      </div>
    </div>
  );
};

export default AllPlaces;
