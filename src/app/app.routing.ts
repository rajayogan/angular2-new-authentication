import { RouterModule } from "@angular/router";
import { ModuleWithProviders }  from '@angular/core';

import { appRoutes } from './app.routes';

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
