import { PreviewOfferType } from '../shared/types/offer';

export const offers: PreviewOfferType[] = [
  {
    id: '6ab3c459-4d22-4a21-bc08-24a9e3c5c811',
    title: 'House in countryside',
    type: 'apartment',
    price: 376,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
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
    isFavorite: true,
    isPremium: true,
    rating: 4.3
  },
  {
    id: '7c5e6aa8-94e8-40ed-8206-9497a4bf309d',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 172,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
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
    isPremium: false,
    rating: 4.8
  }, {
    id: '61921343-9ab5-410e-a29e-f604b14baf81',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'house',
    price: 766,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.837610000000005,
      longitude: 2.3454990000000002,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6
  },
  {
    id: '06b98496-95d4-42df-b0b3-a4da1c40b364',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 112,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.84761,
      longitude: 2.356499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.8
  },
  {
    id: 'd163130b-2cdb-4a8a-be6a-98767381ede4',
    title: 'Waterfront with extraordinary view',
    type: 'room',
    price: 270,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.837610000000005,
      longitude: 2.364499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.2
  },
  {
    id: '15d72e45-9a51-47fc-ac36-6c8a22f570ef',
    title: 'Tile House',
    type: 'room',
    price: 239,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.528341000000005,
      longitude: 9.982654,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.2
  },
  {
    id: '8b6f34c9-650e-446b-856b-bcb0cc249daf',
    title: 'Loft Studio in the Central Area',
    type: 'apartment',
    price: 169,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.954361,
      longitude: 6.982974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.9
  }
];
