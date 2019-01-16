import {User} from '../../models/user.model';
import {UserAction} from '../actions/user.action';

export interface UserState {
	user?: User;
}

export const initialState: UserState = {};

export function userReducer(state = initialState, action: UserAction): UserState {

	switch (action.type) {


		default: {
			return state;
		}
	}
}
