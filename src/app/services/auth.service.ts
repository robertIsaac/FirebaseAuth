import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
  }

  signup(email: string, password: string): ReturnType<firebase.auth.Auth['createUserWithEmailAndPassword']> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  AuthLogin(provider: any): any {
    return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      }).catch((error: any) => {
        console.log(error);
      });
  }
}
