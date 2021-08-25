import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Image } from 'src/app/Model/Image';
import { ImageService } from 'src/app/Services/images/image.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { UserService } from 'src/app/Services/User/user.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Categories/category.service';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';



@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  // //Progress spinner
  // @Input('color') color: ThemePalette;
  // @Input('mode') mode: ProgressSpinnerMode = 'indeterminate';
  // value = 50;
  // isLoading: boolean;
  // images: Image[];
  // allImages: Image[];
  // error?: string;
  // gridColumns = 3;

  // //user settings
  // libraryName?: string;
  // defaultView?: number;

  // //Search
  // imageName: string = '';

  // //auto complate categories
  // [x: string]: any;
  // selectable = true;
  // removable = true;
  // separatorKeysCodes: number[] = [ENTER, COMMA];
  // categoryControl = new FormControl();
  // filteredCategories: Observable<string[]>;
  // categories: string[] = [];
  // allCategories: string[];
  // @ViewChild('categoryInput')
  // categoryInput!: ElementRef<HTMLInputElement>;

  constructor(private imageService: ImageService, private userService: UserService, private router: Router, private categoryService: CategoryService) {
    // this.isLoading = true;
    // this.images = new Array();
    // this.allImages = new Array();
    // this.allCategories = new Array();
    // this.filteredCategories = this.categoryControl.valueChanges.pipe(
    //   startWith(null),
    //   map((category: string | null) => category ? this._filterVal(category) : this.allCategories.slice()));
  }

  ngOnInit(): void {
    // //Gwt user data
    // this.getLibraryData();
    // //Inilize all categories from server and filter them
    // this.initCategories();

    // // this.getImages();
  }
  // async getLibraryData() {
    // const data = await this.userService.getUserSettings();
    // if (data) {
    //   const accesableData = JSON.parse(JSON.stringify(data));
    //   this.libraryName = accesableData.libraryName;
    //   this.defaultView = accesableData.selectedView;
    // }
    // else {
    //   console.log('error');
    // }
  //}
  //redirect to not found
  // this.router.navigate(['/notfound'])





  // async getImages() {
    // try {
    //   this.images = await this.imageService.getAllPublicImages();
    //   this.allImages = this.images;
    //   console.log(this.images);
    //   this.isLoading = false;
    // }
    // catch (e) {
    //   this.error = e;
    // }
  // }

  // searchByCategory() {
    // console.log(this.categories);
    // console.log(this.images);

    // let filteredImages = [];
    // let foundCategory = false;
    // let counter = 0;
    // for (let i = 0; i < this.images.length; i++) {
    //   this.images[i].category.sort();
    //   this.categories.sort();
    //   console.log(this.categories);


    //   for (let j = 0; j < this.images[i].category.length; j++) {
    //     for (let k = 0; k < this.categories.length; k++) {
    //       console.log(String(this.images[i].category[j]));
    //       console.log(this.categories[k]);

    //       if (this.categories[k] === String(this.images[i].category[j]))
    //         counter++;
    //     }
    //   }
    //   if (counter === this.categories.length)
    //     filteredImages.push(this.images[i]);
    //   foundCategory = false;
    //   counter = 0;


    // }

    // this.images = this.categories.length !== 0 ? filteredImages : this.allImages;

  // }
  // searchByName(event: any) {
  //   this.imageName = event.target.value;
  //   const filterImages = this.images.filter(image => image.title.toLowerCase().startsWith(this.imageName));
  //   this.images = this.imageName !== '' ? filterImages : this.allImages;
  // }

  //////////////////Category//////////
  // async initCategories() {
  //   const categoriesFromServer = await this.categoryService.getAllCategories();
  //   categoriesFromServer instanceof Array &&
  //     categoriesFromServer.map((category: any) => this.allCategories.push(category.name));
  // }
  // //Categories select
  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();
  //   //Add category
  //   if (value) {
  //     this.categories.push(value);
  //   }
  //   event.chipInput!.clear();
  //   this.categoryControl.setValue(null);
  //   // this.form.setValue(null);
  // }
  // remove(category: string) {
  //   const index = this.categories.indexOf(category);
  //   if (index >= 0) {
  //     this.categories.splice(index, 1);
  //   }
  //   this.searchByCategory();
  // }
  // selected(event: MatAutocompleteSelectedEvent) {
  //   this.categories.push(event.option.viewValue);
  //   this.categoryInput.nativeElement.value = '';
  //   this.categoryControl.setValue(null);
  //   this.searchByCategory();

  // }
  // private _filterVal(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.allCategories.filter(category => category.toLowerCase().includes(filterValue));
  // }
  // //////////////////
}