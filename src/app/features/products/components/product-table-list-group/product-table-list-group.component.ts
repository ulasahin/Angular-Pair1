import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductTableItem } from '../../models/product-table-item';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../categories/components/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-product-table-list-group',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-table-list-group.component.html',
  styleUrl: './product-table-list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTableListGroupComponent { 
  @Input() initialSelectedProductId: number | null = null;
  @Output() changeSelect = new EventEmitter<{
    selectedProduct: ProductTableItem | null;
  }>();
  @Output() viewProduct = new EventEmitter<ProductTableItem>();
  
  productTable!: ProductTableItem[];
  
  constructor(
    private productsService: ProductsService,
    private change: ChangeDetectorRef,
    private router: Router,
    public  dialog: MatDialog
  ) {}
  
  ngOnInit(): void {
    this.getProductList();
  }
  
  getProductList() {
    this.productsService.getListAll().subscribe((productTable) => {
      this.productTable = productTable;
      this.change.markForCheck();
    });
  }
  
  onChangeSelect(event: { selectedItemId: string | null }) {
    const selectedProduct: ProductTableItem| null = event.selectedItemId
    ? this.productTable.find(
      (product: { id: number; }) => product.id === Number.parseInt(event.selectedItemId!)
    )!
    : null;
    this.changeSelect.emit({ selectedProduct });
  }

  onAdd() {
    this.router.navigate(['products', 'management', 'new']);
  }

  onEdit(productId: number) {
    this.router.navigate(['products', 'management', 'edit', productId]);
  }

  onDelete(productId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: 'Are you sure you want to delete this product?' }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.productsService.delete(productId).subscribe(() => {
          // Handle what should happen after the category is deleted
          this.getProductList();
        });
      }
    });
  }
  
}
