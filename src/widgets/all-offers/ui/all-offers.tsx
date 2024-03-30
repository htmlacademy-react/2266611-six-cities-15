import { useState } from 'react';
import { Nullable } from 'vitest';
import { useAppSelector } from '../../../shared/lib/redux';
import { TPreviewOffer } from '../../../shared/types/offer';
import { getFilteredOffersByCity } from '../../../entities/offers';
import { getCurrentCity } from '../../../shared/lib/redux';

import Sort from '../../../features/sort';
import Map from '../../../features/map';
import Bookmark from '../../../features/bookmark';
import Card from '../../../entities/card';
import NoOffers from './no-offers';

const AllOffers = (): JSX.Element => {
  const [activeCard, setActiveCard] = useState<Nullable<TPreviewOffer>>(null);
  const handleCardHover = (offer: Nullable<TPreviewOffer>) => setActiveCard(offer);

  const currentCity = useAppSelector(getCurrentCity);
  const { name, location } = currentCity;
  const currentOffers = useAppSelector(getFilteredOffersByCity);

  if (!currentOffers.length) {
    return <NoOffers city={name}/>;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} places to stay in {name}</b>
          <Sort />
          <div className="cities__places-list places__list tabs__content">

            {currentOffers.map((offer) => (
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
            offers={currentOffers}
            balloonId={activeCard?.id}
            location={location}
          />
        </div>
      </div>
    </div>
  );
};

export default AllOffers;
