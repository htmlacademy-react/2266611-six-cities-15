import { FullOfferType } from '../shared/types/offer';

const fullOffers: FullOfferType[] = [
  {
    id: '7c5e6aa8-94e8-40ed-8206-9497a4bf309d',
    title: 'Amazing and Extremely Central Flat',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: 'apartment',
    price: 172,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg'
    ],
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
    goods: [
      'Fridge',
      'Breakfast',
      'Washing machine',
      'Towels',
      'Baby seat'
    ],
    host: {
      isPro: false,
      name: 'Vera',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.8,
    bedrooms: 5,
    maxAdults: 6
  },
  {
    id: '6ab3c459-4d22-4a21-bc08-24a9e3c5c811',
    title: 'House in countryside',
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'apartment',
    price: 376,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg'
    ],
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
    goods: [
      'Cable TV',
      'Towels',
      'Air conditioning',
      'Laptop friendly workspace',
      'Heating',
      'Dishwasher',
      'Wi - Fi'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.3,
    bedrooms: 2,
    maxAdults: 4
  },
  {
    id: '61921343-9ab5-410e-a29e-f604b14baf81',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'house',
    price: 766,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
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
    goods: [
      'Wi-Fi',
      'Towels',
      'Cable TV',
      'Washer',
      'Heating',
      'Laptop friendly workspace'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    bedrooms: 1,
    maxAdults: 10
  },
  {
    id: '06b98496-95d4-42df-b0b3-a4da1c40b364',
    title: 'Canal View Prinsengracht',
    description: 'The staff at this property are all great! They all go above and beyond to make your stay comfortable.',
    type: 'apartment',
    price: 112,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
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
    goods: [
      'Wi-Fi',
      'Towels',
      'Cable TV',
      'Washer',
      'Air conditioning',
      'Heating',
      'Laptop friendly workspace'
    ],
    host: {
      isPro: true,
      name: 'Vanessa',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.8,
    bedrooms: 1,
    maxAdults: 1
  },
  {
    id: '15d72e45-9a51-47fc-ac36-6c8a22f570ef',
    title: 'Tile House',
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'room',
    price: 239,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
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
    goods: [
      'Wi-Fi',
      'Towels',
      'Cable TV',
      'Washer',
      'Air conditioning',
      'Heating',
      'Laptop friendly workspace'
    ],
    host: {
      isPro: true,
      name: 'Vanessa',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 1.2,
    bedrooms: 1,
    maxAdults: 1
  }
];

const getFullOffer = (offerId?: string) => fullOffers.find((offer) => offer.id === offerId);

export { fullOffers, getFullOffer };
