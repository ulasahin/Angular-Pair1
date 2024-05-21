import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { FormGroup, FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { EditCategory } from '../../models/edit-category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  templateUrl: './edit-category-form.component.html',
  styleUrl: './edit-category-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCategoryFormComponent {
  formGroup: FormGroup; 
  id: number = 0;
  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }
  ngOnInit() {
    // Subscribe to route params
    this.route.params.subscribe(params => {
      // params['id'] is the ID in the URL
      this.id = params['id'];

    // Fetch the category details
    this.categoriesService.get(this.id).subscribe(category => {
      // Update the form with the category details
      this.formGroup.patchValue({
        name: category.name,
        description: category.description
      });
    });
    });
  }

    editCategory() {
    const editCategory: EditCategory = {
      name: this.formGroup.value.name,
      description: this.formGroup.value.description,
    };
    this.categoriesService.edit(this.id, editCategory).subscribe({
      complete: () => {
        console.log('Category edited');
        this.router.navigate(['/']);
      },
    });
  }

  onFormSubmit() {
    if (this.formGroup.invalid) {
      console.error('Form is invalid');
      return;
    }

    this.editCategory();
  }
}
