import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LogoutUser} from '../../store/actions/users.action';
import {CoreState} from '../../store/reducer/core.reducer';


@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches)
		);

	constructor(private store: Store<CoreState>, private breakpointObserver: BreakpointObserver) {
	}

	logout() {
		this.store.dispatch(new LogoutUser());
		// this.afAuth.auth.signOut().catch();
		// private afAuth: AngularFireAuth,
	}
}
