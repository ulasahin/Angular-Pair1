import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteProductComponent {
  id: number = 0;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) {

  }
  ngOnInit() {
    // Subscribe to route params
    this.route.params.subscribe(params => {
      // params['id'] is the ID in the URL
      this.id = params['id'];
    });
  }

    deleteProducts() {
    this.productsService.delete(this.id).subscribe({
      complete: () => {
        console.log('Product deleted');
      },
    });
  }

  onFormSubmit() {
    this.deleteProducts();
  }
 }
