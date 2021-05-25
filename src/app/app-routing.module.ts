import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { AddquestionComponent } from './component/addquestion/addquestion.component';
import { UnloginGuard } from './Guards/unlogin.guard';
import { LoginComponent } from './component/login/login.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'addquestion', component: AddquestionComponent, canActivate: [UnloginGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
