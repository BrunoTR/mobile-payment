import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

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

	constructor(private afAuth: AngularFireAuth, private breakpointObserver: BreakpointObserver) {
	}

	logout() {
		this.afAuth.auth.signOut().catch();
	}
}
