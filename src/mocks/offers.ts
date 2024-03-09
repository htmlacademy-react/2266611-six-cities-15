import { Place } from '../shared/types/places';

export const offers: Place[] = [
  {
    id: 'bcd01499-c2fa-4b9e-8920-d3d162b7836a',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'room',
    price: 256,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.9
  },
  {
    id: 'd62856c2-83b3-4468-bf14-0a90d3931888',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'room',
    price: 218,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.4
  },
  {
    id: '7bf7a912-455d-4d65-aa69-f1bc6bdd3403',
    title: 'Tile House',
    type: 'hotel',
    price: 360,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.8
  },
  {
    id: 'a8e80324-ea84-47ee-875d-539534f5da3f',
    title: 'Perfectly located Castro',
    type: 'room',
    price: 230,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.9
  },
  {
    id: 'c4201052-c031-4fdc-b64e-04a9b39cfd6c',
    title: 'The Joshua Tree House',
    type: 'house',
    price: 708,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.4
  }
];
