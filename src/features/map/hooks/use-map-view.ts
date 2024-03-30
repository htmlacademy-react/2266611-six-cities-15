import { Map } from 'leaflet';
import { useEffect } from 'react';
import { Nullable } from 'vitest';
import { TLocation } from '../../../shared/types/offer';

export const useMapView = (
  map: Nullable<Map>,
  location: TLocation
) => {
  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);
};
