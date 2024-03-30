import leaflet, { Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { RefObject, useEffect, useState, useRef } from 'react';
import { TileLayerSetup } from '../const';
import { Nullable } from 'vitest';
import { TLocation } from '../../../shared/types/offer';

export const useMap = (
  containerRef: RefObject<HTMLElement | null>,
  location: TLocation
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
