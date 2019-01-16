import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {userReducer, UserState} from './user.reducer';


export interface CoreState {
	user: UserState;
}

export const coreReducer: ActionReducerMap<CoreState> = {
	user: userReducer,
};

export const getCoreState = createFeatureSelector<CoreState>('core');
