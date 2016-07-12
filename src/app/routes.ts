import { provideRouter, RouterConfig} from '@angular/router';

import {FirstpageComponent} from './firstpage/firstpage.component';
import {SecondpageComponent} from './secondpage/secondpage.component';
import {AuthManager} from './authmanager';

export const appRoutes: RouterConfig = [
    {path: '', redirectTo: 'first'},
    {path: 'first', component:FirstpageComponent, canActivate: [AuthManager]},
    {path: 'second', component:SecondpageComponent, canActivate: [AuthManager]}
];

export const AppRouterProvider = provideRouter(appRoutes);