import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AlumiContributorComponent } from './alumi-contributor/alumi-contributor.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddTableDataComponent } from './add-table-data/add-table-data.component';
import { EditTableDataComponent } from './edit-table-data/edit-table-data.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AlumiContributorComponent,
    ProfileComponent,
    SignupComponent,
    EditUserComponent,
    AddTableDataComponent,
    EditTableDataComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
