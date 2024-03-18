import { useRef } from 'react';
import { Nullable } from 'vitest';
import { PreviewOfferType, City } from '../../../shared/types/offer';
import { useMap } from '../hooks/use-map';
import { useMapMarkers } from '../hooks/use-map-markers';
import { useMapView } from '../hooks/use-map-view';

type MapProps = {
  sectionName: 'cities' | 'offer';
  balloonId: Nullable<string>;
  offers: PreviewOfferType[];
  city: City;
}

const Map = ({ sectionName, balloonId, offers, city }: MapProps): JSX.Element => {
  const mapRef = useRef(null);

  const map = useMap(mapRef, city.location);
  useMapMarkers(map, offers, balloonId);
  useMapView(map, city.location);

  return (
    <section className={`${sectionName}__map map`} ref={mapRef}></section>
  );
};

export default Map;
