import { NameSpace } from '../../components/constants/constants';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;
export const getUserEmail = (state: State) => state[NameSpace.User].userEmail;
