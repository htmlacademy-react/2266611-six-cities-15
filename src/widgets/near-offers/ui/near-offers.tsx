import { useAppSelector, getPreviewOffers } from '../../../shared/lib/redux';
import { TFullOffer } from '../../../shared/types/offer';

import Card from '../../../entities/card';
import Bookmark from '../../../features/bookmark';

type NearOffersProps = {
  currentOffer: TFullOffer;
}

const NearOffers = ({ currentOffer }: NearOffersProps): JSX.Element => {
  const offers = useAppSelector(getPreviewOffers);
  const nearOffers = [...offers].filter((offer) => offer.id !== currentOffer.id && offer.city.name === currentOffer.city.name).slice(0, 3);

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">

        {nearOffers
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