import {Action} from '@ngrx/store';
import {User} from '../../models/user.model';

export const UPDATE_USER = '[User] update user';

export class UpdateUser implements Action {
	readonly type = UPDATE_USER;

	constructor(public payload: User) {
	}
}

export type UserAction = UpdateUser;

