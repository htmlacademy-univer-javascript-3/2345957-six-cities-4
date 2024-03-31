export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

//export const URL_MARKER_CURRENT =
//  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const CITY_CARD_WIDTH = '260';

export const CITY_CARD_HEIGHT = '200';

export const REVIEW_SIZE = '54';

export const BOOKMARK_ICON_WIDTH = '18';

export const BOOKMARK_ICON_HEIGHT = '19';

export const Cities = [
  {
    name: 'Paris',
    id: 1,
  },
  {
    name: 'Cologne',
    id: 2,
  },
  {
    name: 'Brussels',
    id: 3,
  },
  {
    name: 'Amsterdam',
    id: 4,
  },
  {
    name: 'Hamburg',
    id: 5,
  },
  {
    name: 'Dusseldorf',
    id: 6,
  },
];

export const SORT_TYPES = {
  0: 'Popular',
  1: 'Price: low to high',
  2: 'Price: high to low',
  3: 'Top rated first',
};

