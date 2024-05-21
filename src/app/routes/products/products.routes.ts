import { Routes } from '@angular/router';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { EditProductPageComponent } from './management/edit-product-page/edit-product-page.component';
import { NewProductPageComponent } from './management/new-product-page/new-product-page.component';
import { DeleteProductComponent } from '../../features/products/components/delete-product/delete-product.component';
import { ProductTableListGroupComponent } from '../../features/products/components/product-table-list-group/product-table-list-group.component';

export const productsRoutes: Routes = [
  {
    path: 'products/table',
    component: ProductTableListGroupComponent,
  },
  {
    path: 'products/:productId', // :productId => Route params
    // localhost:4200/products/5 // localhost:4200/products/1
    component: ProductDetailPageComponent,
  },
  {
    path: 'products/management/new', // :productId => Route params
    // localhost:4200/products/5 // localhost:4200/products/1
    component: NewProductPageComponent,
  },
  {
    path: 'products/management/edit/:id', // :productId => Route params
    // localhost:4200/products/5 // localhost:4200/products/1
    component: EditProductPageComponent,
  },
  {
    path: 'products/management/delete/:id', // :productId => Route params
    // localhost:4200/products/5 // localhost:4200/products/1
    component: DeleteProductComponent,
  },
];
