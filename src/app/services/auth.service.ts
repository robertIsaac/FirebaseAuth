import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<firebase.User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.user;
    this.user.subscribe((user) => {
      console.log(user);
    });
  }

  SendVerificationMail(): Subscription {
    return this.user.subscribe((user) => {
      user?.sendEmailVerification().then(() => {
        console.log('thank you mail will be sent ');
      });
    });
  }

  signup(email: string, password: string): Promise<void> {
    return this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => {
      this.SendVerificationMail();
    }).catch((error: any) => {
      window.alert(error.message);
    });
  }

  logIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
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
