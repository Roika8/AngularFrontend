import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/Services/Categories/category.service';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'categories-search',
  templateUrl: './categories-search.component.html',
  styleUrls: ['./categories-search.component.css']
})
export class CategoriesSearchComponent implements OnInit {

  //auto complate categories
  [x: string]: any;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  categoryControl = new FormControl();
  filteredCategories: Observable<string[]>;
  @Input('categories') categories: string[] = [];
  allCategories: string[];
  @ViewChild('categoryInput')
  categoryInput!: ElementRef<HTMLInputElement>;

  @Output('change') change = new EventEmitter();
  constructor(private categoryService: CategoryService) {
    this.allCategories = new Array();
    this.filteredCategories = this.categoryControl.valueChanges.pipe(
      startWith(null),
      map((category: string | null) => category ? this._filterVal(category) : this.allCategories.slice()));
  }

  ngOnInit(): void {
    this.initCategories();
  }
  /////////////////Category//////////
  async initCategories() {
    const categoriesFromServer = await this.categoryService.getAllCategories();
    categoriesFromServer instanceof Array &&
      categoriesFromServer.map((category: any) => this.allCategories.push(category.name));
  }


  remove(category: string) {
    const index = this.categories.indexOf(category);
    if (index >= 0) {
      this.categories.splice(index, 1);
    }
    this.change.emit(this.categories);
    // this.searchByCategory();
  }
  selected(event: MatAutocompleteSelectedEvent) {
    const alreadyChosen = this.categories.find(category => category === event.option.viewValue)
    if (!alreadyChosen) {
      this.categories.push(event.option.viewValue);
      this.categoryInput.nativeElement.value = '';
      this.categoryControl.setValue(null);
      this.change.emit(this.categories);
    }

    // this.searchByCategory();
  }
  private _filterVal(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allCategories.filter(category => category.toLowerCase().includes(filterValue));
  }

}
