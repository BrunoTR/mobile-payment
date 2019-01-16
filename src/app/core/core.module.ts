import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../shared/shared.module';
import {LayoutComponent} from './containers/layout/layout.component';
import {LoginComponent} from './containers/login/login.component';

import {CoreRoutingModule} from './core-routing.module';
import {AuthGuard} from './guards/auth.guard';
import {UserEffects} from './store/effects/user.effects';
import {coreReducer} from './store/reducer/core.reducer';

@NgModule({
	declarations: [LayoutComponent, LoginComponent],
	imports: [
		SharedModule,
		CoreRoutingModule,
		EffectsModule.forFeature([UserEffects]),
		StoreModule.forFeature('core', coreReducer),
	],
	providers: [AuthGuard],
})
export class CoreModule {
}
