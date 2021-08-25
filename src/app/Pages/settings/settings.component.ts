import { ChangeDetectionStrategy,Component,  OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/Services/Categories/category.service';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {
  @ViewChild(MatAccordion)
  accordion: MatAccordion = new MatAccordion;

  categories: string[];
  allCategories: any[];

  constructor(private categoryService: CategoryService, private router: Router) {
    this.allCategories = new Array();
    this.categories = new Array();
    this.initCategories();
  }

  ngOnInit(): void {
  }
  async initCategories() {
    this.allCategories = await this.categoryService.getAllCategories();
    this.allCategories.map(category => {
      this.categories.push(category.name);
    })
    console.log(this.categories);
  }
  async addCategory(newCategory: HTMLInputElement) {
    const res = await this.categoryService.addCategory(newCategory.value.toLowerCase());
    console.log(res);

    if (!res)
      alert('Category aleady exist');
    else {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/settings']);
    }
  }
  async deleteCategory(newCategory: HTMLInputElement) {
    const res = await this.categoryService.deleteCategory(newCategory.value.toLowerCase());
    if (!res)
      alert('Category is not exist');
    else {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/settings']);
    }
  }

}
