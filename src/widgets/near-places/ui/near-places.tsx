import { PreviewOfferType } from '../../../shared/types/offer';
import { FullOfferType } from '../../../shared/types/offer';
import Card from '../../../entities/card';
import Bookmark from '../../../features/bookmark';

type NearPlacesProps = {
  currentOffer: FullOfferType;
  offers: PreviewOfferType[];
}

const NearPlaces = ({ currentOffer, offers }: NearPlacesProps): JSX.Element => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">

      {offers
        .filter((offer) => offer.id !== currentOffer.id)
        .slice(0, 3)
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

export default NearPlaces;
