import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-delete-category',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './delete-category.component.html',
  styleUrl: './delete-category.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteCategoryComponent {
  id: number = 0;
  constructor(
    private categoriesService: CategoriesService,
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

    deleteCategory() {
    this.categoriesService.delete(this.id).subscribe({
      complete: () => {
        console.log('Category deleted');
      },
    });
  }

  onFormSubmit() {
    this.deleteCategory();
  }
 }
