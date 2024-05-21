import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EditProduct } from '../../models/edit-product';

@Component({
  selector: 'app-edit-product-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  templateUrl: './edit-product-form.component.html',
  styleUrl: './edit-product-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductFormComponent { 
  formGroup: FormGroup; 
  id: number = 0;
  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      supplierId: ['', [Validators.required]],
      quantityPerUnit: ['', [Validators.required]],
      unitPrice: ['', [Validators.required]],
      unitsInStock: ['', [Validators.required]],
      unitsOnOrder: ['', [Validators.required]],
      reorderLevel: ['', [Validators.required]],
      discontinued: ['', [Validators.required]],
    });
  }
  ngOnInit() {
    // Subscribe to route params
    this.route.params.subscribe(params => {
      // params['id'] is the ID in the URL
      this.id = params['id'];

    // Fetch the category details
    this.productsService.get(this.id).subscribe(product => {
      // Update the form with the category details
      this.formGroup.patchValue({
      name: product.name,
      imageUrl: product.imageUrl,
      categoryId: product.categoryId,
      supplierId: product.supplierId,
      quantityPerUnit: product.quantityPerUnit,
      unitPrice: product.unitPrice,
      unitsInStock: product.unitsInStock,
      unitsOnOrder: product.unitsOnOrder,
      reorderLevel: product.reorderLevel,
      discontinued: product.discontinued
      });
    });
    });
  }

    editProduct() {
    const editProduct: EditProduct = {
      name: this.formGroup.value.name,
      imageUrl: this.formGroup.value.imageUrl,
      categoryId: this.formGroup.value.categoryId,
      supplierId: this.formGroup.value.supplierId,
      quantityPerUnit: this.formGroup.value.quantityPerUnit,
      unitPrice: this.formGroup.value.unitPrice,
      unitsInStock: this.formGroup.value.unitsInStock,
      unitsOnOrder: this.formGroup.value.unitsOnOrder,
      reorderLevel: this.formGroup.value.reorderLevel,
      discontinued: this.formGroup.value.discontinued
    };
    this.productsService.edit(this.id, editProduct).subscribe({
      complete: () => {
        console.log('Product edited');
        this.router.navigate(['products', 'table']);
      },
    });
  }

  onFormSubmit() {
    if (this.formGroup.invalid) {
      console.error('Form is invalid');
      return;
    }

    this.editProduct();
  }
}
