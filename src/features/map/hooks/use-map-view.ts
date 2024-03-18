import { Map } from 'leaflet';
import { useEffect } from 'react';
import { Nullable } from 'vitest';
import { Location } from '../../../shared/types/offer';

export const useMapView = (
  map: Nullable<Map>,
  location: Location
) => {
  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);
};
