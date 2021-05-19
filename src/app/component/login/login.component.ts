import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private as: AuthService) {
  }

  ngOnInit(): void {
  }

  login(): void {
    const loginData = this.loginForm.value;
    this.as.logIn(loginData.email, loginData.password).then(result => {
      console.log(result);
    }).catch(err => {
      console.log(err);
    });
  }
}
