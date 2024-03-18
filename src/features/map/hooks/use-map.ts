import { RefObject, useEffect, useState, useRef } from 'react';
import { TileLayerSetup } from '../const/const';
import { Nullable } from 'vitest';
import { Location } from '../../../shared/types/offer';
import leaflet, { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export const useMap = (
  containerRef: RefObject<HTMLElement | null>,
  location: Location
) => {
  const [map, setMap] = useState<Nullable<Map>>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (containerRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(containerRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude
        },
        zoom: location.zoom,
      });

      leaflet
        .tileLayer(TileLayerSetup.URL, {
          attribution: TileLayerSetup.Attribution,
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [containerRef, location]);

  return map;
};
