import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'product-page',
    loadComponent: () => import('./pages/product-page/product-page.component').then((m) => m.ProductPageComponent),
  },
];
