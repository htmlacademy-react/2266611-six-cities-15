import { useAppSelector, getNearbyOffers } from '../../../shared/lib/redux';

import MemoizedCard from '../../../entities/card';
import MemoizedBookmark from '../../../features/bookmark';

const NearOffers = (): JSX.Element => {
  const nearbyOffers = useAppSelector(getNearbyOffers);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {nearbyOffers
          .map((offer) => (
            <MemoizedCard
              key={offer.id}
              offer={offer}
              sectionName='near-places'
              userAction={
                <MemoizedBookmark
                  sectionName="place-card"
                  isFavorite={offer.isFavorite}
                />
              }
            />
          ))}

      </div>
    </section>
  );
};

export default NearOffers;
