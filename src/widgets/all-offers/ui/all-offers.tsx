import { getCurrentOffers } from '../../../entities/offers';
import { offersActions } from '../../../entities/offers';
import { useCallback } from 'react';
import {
  getCurrentCity,
  getPreviewOffersStatusObject,
  useAppSelector,
  useActionCreators
} from '../../../shared/lib/redux';

import MemoizedSort from '../../../features/sort';
import Map from '../../../features/map';
import MemoizedBookmark from '../../../features/bookmark';
import MemoizedCard from '../../../entities/card';
import NoOffers from './no-offers';
import ServerError from '../../../shared/ui/server-error';

const AllOffers = (): JSX.Element => {
  const currentCity = useAppSelector(getCurrentCity);
  const { name, location } = currentCity;
  const currentOffers = useAppSelector(getCurrentOffers);
  const previewOffersStatus = useAppSelector(getPreviewOffersStatusObject);
  const { fetchPreviewOffers } = useActionCreators(offersActions);

  const handleRefreshClick = useCallback(() => {
    fetchPreviewOffers();
  }, [fetchPreviewOffers]);

  if (previewOffersStatus.isFailed) {
    return <ServerError callback={handleRefreshClick} />;
  }

  if (!currentOffers.length) {
    return <NoOffers city={name} />;
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} place{currentOffers.length > 1 && 's'} to stay in {name}</b>
          <MemoizedSort />
          <div className="cities__places-list places__list tabs__content">

            {currentOffers.map((offer) => (
              <MemoizedCard
                key={offer.id}
                offer={offer}
                sectionName='cities'
                userAction={
                  <MemoizedBookmark
                    sectionName="place-card"
                    offerId={offer.id}
                    isFavorite={offer.isFavorite}
                  />
                }
                hovered
              />
            ))}

          </div>
        </section>
        <div className="cities__right-section">
          <Map
            sectionName="cities"
            offers={currentOffers}
            location={location}
          />
        </div>
      </div>
    </div>
  );
};

export default AllOffers;
