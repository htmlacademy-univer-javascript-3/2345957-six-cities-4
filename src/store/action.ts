import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../components/constants/constants';

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
