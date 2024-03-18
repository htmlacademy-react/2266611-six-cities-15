import leaflet from 'leaflet';

const URL_BALLOON_DEFAULT = 'img/pin.svg';
const URL_BALLOON_ACTIVE = 'img/pin-active.svg';

export const defaultBalloonIcon = leaflet.icon({
  iconUrl: URL_BALLOON_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

export const activeBalloonIcon = leaflet.icon({
  iconUrl: URL_BALLOON_ACTIVE,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

export const TileLayerSetup = {
  URL: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
} as const;
