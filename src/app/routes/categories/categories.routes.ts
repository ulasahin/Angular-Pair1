import { Routes } from '@angular/router';
import { NewCategoryPageComponent } from './management/new-category-page/new-category-page.component';
import { EditCategoryPageComponent } from './management/edit-category-page/edit-category-page.component';
import { CategoryTableListGroupComponent } from '../../features/categories/components/category-table-list-group/category-table-list-group.component';
import { DeleteCategoryComponent } from '../../features/categories/components/delete-category/delete-category.component';

export const categoriesRoutes: Routes = [
  {
    path: 'categories/management/new',
    component: NewCategoryPageComponent,
  },
  {
    path: 'categories/management/edit/:id',
    component: EditCategoryPageComponent,
  },
  {
    path: 'categories/management/delete/:id',
    component: DeleteCategoryComponent,
  },
  {
    path: 'categories/table',
    component: CategoryTableListGroupComponent,
  },
];
