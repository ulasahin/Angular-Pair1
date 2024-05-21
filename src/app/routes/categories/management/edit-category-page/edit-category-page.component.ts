import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EditCategoryFormComponent } from '../../../../features/categories/components/edit-category-form/edit-category-form.component';

@Component({
  selector: 'app-edit-category-page',
  standalone: true,
  imports: [
    CommonModule,
    EditCategoryFormComponent,
  ],
  templateUrl: './edit-category-page.component.html',
  styleUrl: './edit-category-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCategoryPageComponent { }
