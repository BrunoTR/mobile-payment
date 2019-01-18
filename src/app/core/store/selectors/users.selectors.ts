import {createSelector} from '@ngrx/store';
import {getCoreState} from '../reducer/coreReducers';

export const getUsersState = createSelector(
	getCoreState,
	state => state.users
);

export const getAuthenticatedUser = createSelector(
	getUsersState,
	state => state.user
);

export const getAuthenticatedUserId = createSelector(
	getAuthenticatedUser,
	user => user ? user.uid : ''
);

