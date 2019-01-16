import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireFunctionsModule} from '@angular/fire/functions';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {appReducers, metaReducers} from './store/reducers/app.reducers';
import {CustomSerializer} from './store/reducers/custom-route-serializer';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFirestoreModule,
		AngularFireFunctionsModule,
		EffectsModule.forRoot([]),
		StoreModule.forRoot(appReducers, {metaReducers}),
		StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
		StoreRouterConnectingModule.forRoot({
			serializer: CustomSerializer
		}),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
