import { Routes } from '@angular/router';

import { LoginComponent } from './login';
import { DashboardComponent } from './dashboard';
import { AuthManager } from './auth';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [AuthManager] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthManager] }
];
