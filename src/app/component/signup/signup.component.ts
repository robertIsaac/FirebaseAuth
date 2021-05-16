import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase/app';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private as: AuthService) {
  }

  ngOnInit(): void {
  }

  FacebookAuth(): any {
    return this.as.AuthLogin(new firebase.auth.FacebookAuthProvider());
  }

  LoginGmail(): any {
    return this.as.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }

  signup(): void {
    const registerData = this.registerForm.value;
    this.as.signup(registerData.email, registerData.password)
      .then((data: any) => console.log(data))
      .catch((err: any) => console.log(err),
      );
  }
}
