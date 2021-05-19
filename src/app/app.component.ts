import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'FirebaseAuth';

  constructor(private as: AuthService) {
  }

  logout(): void {
    this.as.logout();
  }

}
