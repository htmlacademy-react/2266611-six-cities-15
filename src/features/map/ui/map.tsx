import { useRef } from 'react';
import { TPreviewOffer, TLocation } from '../../../shared/types/offer';
import { useMap } from '../hooks/use-map';
import { useMapMarkers } from '../hooks/use-map-markers';
import { useMapView } from '../hooks/use-map-view';
import { useAppSelector } from '../../../shared/lib/redux';
import { getActiveId } from '../../../shared/lib/redux';

type MapProps = {
  sectionName: 'cities' | 'offer';
  offers: TPreviewOffer[];
  location: TLocation;
}

const Map = ({ sectionName, offers, location }: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const balloonId = useAppSelector(getActiveId);

  const map = useMap(mapRef, location);
  useMapMarkers(map, offers, balloonId);
  useMapView(map, location);

  return (
    <section className={`${sectionName}__map map`} ref={mapRef}></section>
  );
};

export default Map;
