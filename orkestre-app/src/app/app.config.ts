import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthenticationInterceptorService } from './services/authentication-interceptor.service';
import { provideAnimations, provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';




export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([AuthenticationInterceptorService])),
    provideNoopAnimations(),

      provideToastr({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      enableHtml: false,
      disableTimeOut: false,
      closeButton: true,
      progressBar: true,
      // Désactiver toutes les animations
      toastClass: 'ngx-toastr',
      titleClass: 'toast-title',
      messageClass: 'toast-message',
      tapToDismiss: true,
      onActivateTick: false,
      // Configuration pour supprimer les animations CSS
      easing: 'ease-in',
      easeTime: 0, // Temps d'animation à 0
      extendedTimeOut: 0
    })
  ],
};
