import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  emailVerificationCode: string;
  apiKey: string;
  showForm = false;
  errorMessage: string;

  constructor(private activatedRoute: ActivatedRoute, private as: AuthService, public router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.emailVerificationCode = params.oobCode;
    });
  }

  ngOnInit(): void {
    this.as.user.subscribe((userverified) => {
      if (!userverified?.emailVerified) {
        firebase.auth().checkActionCode(this.emailVerificationCode).then(
          (user: any) => {
            console.log('User Info KKKKK : ' + user.data.email);
            firebase.auth().applyActionCode(this.emailVerificationCode).then(() => {
              this.showForm = true;
            }).catch(
              (error) => {
                this.errorMessage = error.message;
                console.log(error);
              },
            );
          },
        ).catch(
          (error) => {
            this.errorMessage = error.message;
            console.log(error);
          },
        );
      }else {
        this.showForm = true;
      }
    });
  }

}
