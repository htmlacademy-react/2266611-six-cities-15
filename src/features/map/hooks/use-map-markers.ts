import { useEffect } from 'react';
import { activeBalloonIcon, defaultBalloonIcon } from '../const';
import leaflet, { Map, layerGroup } from 'leaflet';
import { Nullable } from 'vitest';
import { TPreviewOffer } from '../../../shared/types/offer';

export const useMapMarkers = (
  map: Nullable<Map>,
  offers: TPreviewOffer[],
  balloonId: Nullable<string>
) => {
  useEffect(() => {
    if (map) {
      const markers = layerGroup().addTo(map);

      offers.forEach((offer) => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: offer.id === balloonId ? activeBalloonIcon : defaultBalloonIcon,
        })
          .addTo(markers);
      });

      return () => {
        map.removeLayer(markers);
      };
    }
  }, [map, offers, balloonId]);
};
