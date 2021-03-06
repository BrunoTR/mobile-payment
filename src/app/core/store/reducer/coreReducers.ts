import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {usersReducer, UserState} from './users.reducer';


export interface CoreState {
	users: UserState;
}

export const coreReducers: ActionReducerMap<CoreState> = {
	users: usersReducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');
