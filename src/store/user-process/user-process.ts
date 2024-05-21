import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {UserState} from '../../types/state.ts';
import { AuthorizationStatus, NameSpace } from '../../constants/constants.ts';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    requireAuthorization(state, action: PayloadAction<AuthorizationStatus>) {
      state.authorizationStatus = action.payload;
    },
  },
});

export const { requireAuthorization } = userProcess.actions;
