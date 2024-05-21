import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // Basit girdiler almak için yardımcı olur.
    ReactiveFormsModule, // Daha ayrıntılı form yapıları kurmamıza yardımcı olur.
  ],
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductFormComponent {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private productService: ProductsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      price: ['', [Validators.required]],
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


  addProduct() {
    const addProduct = {
      name: this.formGroup.value.name,
      imageUrl: this.formGroup.value.imageUrl,
      price: this.formGroup.value.price,
      categoryId: this.formGroup.value.categoryId,
      supplierId: this.formGroup.value.supplierId,
      quantityPerUnit: this.formGroup.value.quantityPerUnit,
      unitPrice: this.formGroup.value.unitPrice,
      unitsInStock: this.formGroup.value.unitsInStock,
      unitsOnOrder: this.formGroup.value.unitsOnOrder,
      reorderLevel: this.formGroup.value.reorderLevel,
      discontinued: this.formGroup.value.discontinued,
    };
    this.productService.add(addProduct).subscribe({
      complete: () => {
        console.log('Product added');
        this.router.navigate(['products', 'table']);
      },
  });
 }

 onFormSubmit() {
  if (this.formGroup.invalid) {
    console.error('Form is invalid');
    return;
  }
  this.addProduct();
}
}
