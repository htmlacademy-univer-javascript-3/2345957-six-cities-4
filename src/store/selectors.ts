
import { createSelector } from 'reselect';
import {store} from './index.ts';

type State = ReturnType<typeof store.getState>;

// Селекторы для отдельных частей состояния
const selectCurrentOffer = (state: State) => state.currentOffer;

const selectOfferInfo = createSelector(
  [selectCurrentOffer],
  (currentOffer) => currentOffer.offerInfo
);

const selectNearestOffers = createSelector(
  [selectCurrentOffer],
  (currentOffer) => currentOffer.nearestOffers
);

const selectReviews = createSelector(
  [selectCurrentOffer],
  (currentOffer) => currentOffer.reviews
);

// Композитный селектор
export const selectCurrentOfferData = createSelector(
  [selectOfferInfo, selectNearestOffers, selectReviews],
  (offerInfo, nearestOffers, reviews) => ({
    offerInfo,
    nearestOffers,
    reviews,
  })
);
