import { HttpClient } from '@angular/common/http';
import { Categorie } from 'src/app/Model/Category';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = 'http://localhost:3000';
  categories: Categorie[];
  constructor(private http: HttpClient) {
    this.categories = new Array();
  }

  addCategory(name: string) {
    const obj = { name: name }

    const result = new Promise((res, rej) => {
      this.http.post(`${this.url}/category/add`, obj).subscribe(response => {
        res(response);
      })
    })
    return result;
  }
  async getAllCategories() {
    this.categories = await this.http.get<Categorie[]>(`${this.url}/category`).toPromise();

    return this.categories
  }
  async deleteCategory(name: string) {
    const result = new Promise((res, rej) => {
      this.http.delete(`${this.url}/category/delete/${name}`).subscribe(response => {
        res(response);
      })
    })
    return result;
  }
}
