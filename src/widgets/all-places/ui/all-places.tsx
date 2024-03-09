import Sort from '../../../features/sort';
import Map from '../../../features/map';
import Card from '../../../entities/card';
import { Place } from '../../../shared/types/places';

type AllPlacesProps = {
  offers: Place[];
};

const AllPlaces = ({offers}: AllPlacesProps): JSX.Element => (
  <div className="cities">
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">312 places to stay in Amsterdam</b>
        <Sort />
        <div className="cities__places-list places__list tabs__content">

          {offers.map((offer) => <Card key={offer.id} offer={offer} />)}

        </div>
      </section>
      <div className="cities__right-section">
        <Map
          type="cities"
        />
      </div>
    </div>
  </div>
);

export default AllPlaces;
