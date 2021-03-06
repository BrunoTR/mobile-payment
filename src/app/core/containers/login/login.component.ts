import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(private afAuth: AngularFireAuth) {
	}

	ngOnInit() {
	}

	login() {
		this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).catch();
	}
}
