import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // withComponentInputBinding le indica a Angular que los parametros llegan como inputs a las paginas
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient()
  ]
};
