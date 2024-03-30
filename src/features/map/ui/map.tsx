import { useRef } from 'react';
import { Nullable } from 'vitest';
import { TPreviewOffer, TLocation } from '../../../shared/types/offer';
import { useMap } from '../hooks/use-map';
import { useMapMarkers } from '../hooks/use-map-markers';
import { useMapView } from '../hooks/use-map-view';

type MapProps = {
  sectionName: 'cities' | 'offer';
  balloonId: Nullable<string>;
  offers: TPreviewOffer[];
  location: TLocation;
}

const Map = ({ sectionName, balloonId, offers, location }: MapProps): JSX.Element => {
  const mapRef = useRef(null);

  const map = useMap(mapRef, location);
  useMapMarkers(map, offers, balloonId);
  useMapView(map, location);

  return (
    <section className={`${sectionName}__map map`} ref={mapRef}></section>
  );
};

export default Map;
