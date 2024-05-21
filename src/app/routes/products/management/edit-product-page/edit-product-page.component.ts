import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EditProductFormComponent } from '../../../../features/products/components/edit-product-form/edit-product-form.component';

@Component({
  selector: 'app-edit-product-page',
  standalone: true,
  imports: [
    CommonModule,
    EditProductFormComponent,
  ],
  templateUrl: './edit-product-page.component.html',
  styleUrl: './edit-product-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductPageComponent { }
