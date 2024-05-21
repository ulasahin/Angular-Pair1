import { Routes } from '@angular/router';
import { HomePageComponent } from './routes/home-page/home-page.component';
import { authRoutes } from './routes/auth/auth.routes';
import { productsRoutes } from './routes/products/products.routes';
import { categoriesRoutes } from './routes/categories/categories.routes';

export const routes: Routes = [
  {
    path: '', // Mevcut route, belirtilen path ile eşleştiğinde
    component: HomePageComponent, // İlgili component'i, AppComponent'den başlayarak ilk karşılaştığı router-outlet'e yerleştirir.
  },

  ...authRoutes, // ... spread operatörü ile authRoutes array'ini routes array'ine ekliyoruz.
  ...productsRoutes,
  ...categoriesRoutes,
];
