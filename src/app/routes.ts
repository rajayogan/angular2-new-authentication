import { provideRouter, RouterConfig} from '@angular/router';

import {FirstpageComponent} from './firstpage/firstpage.component';
import {SecondpageComponent} from './secondpage/secondpage.component';

export const appRoutes: RouterConfig = [
    {path: '', redirectTo: 'first'},
    {path: 'first', component:FirstpageComponent},
    {path: 'second', component:SecondpageComponent}
];

export const AppRouterProvider = provideRouter(appRoutes);