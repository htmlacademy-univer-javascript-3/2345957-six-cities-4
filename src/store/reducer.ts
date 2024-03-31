import {createReducer} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {listFilling, cityChange, sortTypeSelect} from './action';
import {offers} from '../mocks/offers';

type StateType = {
  city: string;
  offers: Offer[];
  sortType: string;
};

const initialState: StateType = {
  city: 'Paris',
  offers: [],
  sortType: 'Popular',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityChange, (state, {payload}) => {
      state.city = payload;
    })
    .addCase(listFilling, (state) => {
      state.offers = offers;
    })
    .addCase(sortTypeSelect, (state, {payload}) => {
      state.sortType = payload;
    });
});

export {reducer};
