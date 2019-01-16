import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Actions, Effect} from '@ngrx/effects';
import {filter, map} from 'rxjs/operators';
import {UpdateUser} from '../actions/user.action';


@Injectable()
export class UserEffects {

	constructor(private actions$: Actions, private afAuth: AngularFireAuth,) {
	}

	@Effect()
	updateUser$ = this.afAuth.user.pipe(
		filter(user => !!user),
		map(user => {
			const {uid, displayName, email, photoURL} = user;
			return new UpdateUser({uid, displayName, email, photoURL});
		})
	);

}
