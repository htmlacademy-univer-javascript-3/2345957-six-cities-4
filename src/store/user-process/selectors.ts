import {NameSpace} from '../../constants/constants';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;
