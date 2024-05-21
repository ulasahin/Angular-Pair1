import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CategoryTableItem } from '../../models/category-table-item';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-category-table-list-group',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './category-table-list-group.component.html',
  styleUrl: './category-table-list-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryTableListGroupComponent {

  @Input() initialSelectedCategoryId: number | null = null;
  @Output() changeSelect = new EventEmitter<{
    selectedCategory: CategoryTableItem | null;
  }>();
  @Output() viewCategory = new EventEmitter<CategoryTableItem>();
  
  categoryTable!: CategoryTableItem[];
  
  constructor(
    private categoriesService: CategoriesService,
    private change: ChangeDetectorRef,
    private router: Router,
    public  dialog: MatDialog
  ) {}
  
  ngOnInit(): void {
    this.getCategoryList();
  }
  
  getCategoryList() {
    this.categoriesService.getList().subscribe((categoryTable) => {
      this.categoryTable = categoryTable;
      this.change.markForCheck();
    });
  }
  
  onChangeSelect(event: { selectedItemId: string | null }) {
    const selectedCategory: CategoryTableItem| null = event.selectedItemId
    ? this.categoryTable.find(
      (category) => category.id === Number.parseInt(event.selectedItemId!)
    )!
    : null;
    this.changeSelect.emit({ selectedCategory });
  }

  onAdd() {
    this.router.navigate(['categories', 'management', 'new']);
  }

  onEdit(categoryId: number) {
    this.router.navigate(['categories', 'management', 'edit', categoryId]);
  }

  onDelete(categoryId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { message: 'Are you sure you want to delete this category?' }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.categoriesService.delete(categoryId).subscribe(() => {
          // Handle what should happen after the category is deleted
          this.getCategoryList();
        });
      }
    });
  }
}