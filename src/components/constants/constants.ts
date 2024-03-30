export const Setting = {
  placeCount: 312
};

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
