import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment, AppRouterProvider, AuthManager, AuthService } from './app/';
import { HTTP_PROVIDERS } from '@angular/http';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [AppRouterProvider, AuthManager, AuthService, HTTP_PROVIDERS]);

