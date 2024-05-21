import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { CategoryListItem } from '../models/category-list-item';
import { AddCategory } from '../models/add-category';
import { AddedCategory } from '../models/added-category';
import { EditCategory } from '../models/edit-category';
import { EditedCategory } from '../models/edited-category';
import { CategoryTableItem } from '../models/category-table-item';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiControllerUrl = `${environment.apiUrl}/categories`;

  constructor(private http: HttpClient) {}

  getList(): Observable<CategoryListItem[]> {
    return this.http.get<CategoryListItem[]>(this.apiControllerUrl);
  }

  get(id: number): Observable<CategoryTableItem> {
    return this.http.get<CategoryTableItem>(`${this.apiControllerUrl}/${id}`);
  }

  add(category: AddCategory): Observable<AddedCategory> {
    return this.http.post<AddedCategory>(this.apiControllerUrl, category);
  }

  edit(id: number, category: EditCategory): Observable<EditedCategory> {
    return this.http.put<EditedCategory>(`${this.apiControllerUrl}/${id}`, category);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiControllerUrl}/${id}`);
  }
}
