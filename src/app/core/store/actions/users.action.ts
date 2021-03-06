import {Action} from '@ngrx/store';
import {User} from '../../models/user.model';

export const UPDATE_USER = '[User] update user';

export class UpdateUser implements Action {
	readonly type = UPDATE_USER;

	constructor(public payload: User) {
	}
}

export const LOGOUT_USER = '[User] LOGOUT_USER';

export class LogoutUser implements Action {
	readonly type = LOGOUT_USER;
}

export type UsersAction = UpdateUser | LogoutUser;

