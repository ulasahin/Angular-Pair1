import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddProductFormComponent } from "../../../../features/products/components/add-product-form/add-product-form.component";

@Component({
    selector: 'app-new-product-page',
    standalone: true,
    templateUrl: './new-product-page.component.html',
    styleUrl: './new-product-page.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        AddProductFormComponent
    ]
})
export class NewProductPageComponent { }
