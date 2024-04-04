import { useAppSelector, getNearbyOffers } from '../../../shared/lib/redux';

import Card from '../../../entities/card';
import Bookmark from '../../../features/bookmark';

const NearOffers = (): JSX.Element => {
  const nearbyOffers = useAppSelector(getNearbyOffers);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {nearbyOffers
          .map((offer) => (
            <Card
              key={offer.id}
              offer={offer}
              sectionName='near-places'
              userAction={
                <Bookmark
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
