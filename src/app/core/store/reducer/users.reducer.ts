import {User} from '../../models/user.model';
import {UPDATE_USER, UsersAction} from '../actions/users.action';

export interface UserState {
	user?: User;
}

export const initialState: UserState = {};

export function usersReducer(state = initialState, action: UsersAction): UserState {

	switch (action.type) {

		case UPDATE_USER: {
			return {
				...state,
				user: action.payload
			};
		}
		default: {
			return state;
		}
	}
}
