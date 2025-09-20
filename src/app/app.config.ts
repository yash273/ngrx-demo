import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { cartReducer } from './store/cart/cart.reducer';
import { productsReducer } from './store/products/product.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ product: productsReducer, cart: cartReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
