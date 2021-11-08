import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTableDataComponent } from './add-table-data/add-table-data.component';
import { AlumiContributorComponent } from './alumi-contributor/alumi-contributor.component';
import { EditTableDataComponent } from './edit-table-data/edit-table-data.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'alumni', component: AlumiContributorComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'EditUser', component: EditUserComponent },
  { path: 'addTableData', component: AddTableDataComponent },
  { path: 'editTableData/:userid', component: EditTableDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
