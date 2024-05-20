import { NameSpace } from '../../components/constants/constants';
import {State} from '../../types/state';

export const getCity = (state: State) => state[NameSpace.Other].city;
export const getSortType = (state: State) => state[NameSpace.Other].sortType;
export const getError = (state: State) => state[NameSpace.Other].error;

