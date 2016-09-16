import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { appRouting } from './app.routing';
import { AuthManager, AuthService } from './auth';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { DashboardComponent } from './dashboard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule, 
    appRouting
  ],
  providers: [
    AuthManager,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}