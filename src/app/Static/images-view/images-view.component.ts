import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/Model/Image';
import { ImageService } from 'src/app/Services/images/image.service';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { UserService } from 'src/app/Services/User/user.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Categories/category.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'images-view',
  templateUrl: './images-view.component.html',
  styleUrls: ['./images-view.component.css']
})
export class ImagesViewComponent implements OnInit {
  @Input('imagesType') imagesType: number = 0;
  title: string = "Home";
  //Loading images
  @Input('color') color: ThemePalette;
  @Input('mode') mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  isLoading: boolean;
  images: Image[];
  allImages: Image[];
  shuffledImages: Image[];
  error?: string;
  gridColumns = 3;

  //Slideshow enable
  startSlideShow: boolean = false;

  //View
  view: boolean = false;

  //user settings
  libraryName?: string;
  defaultView?: number;

  //Search
  imageName: string = '';

  constructor(private imageService: ImageService, private userService: UserService, private router: Router, public dialog: MatDialog) {
    this.isLoading = true;
    this.images = new Array();
    this.allImages = new Array();
    this.shuffledImages = new Array();
  }

  ngOnInit(): void {
    this.getLibraryData();
    this.getImages();
  }
  //Private album
  isValidAccess() {
    let res;
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { password: '' }
    });
    dialogRef.afterClosed().subscribe(async (result: string) => {
      if (result === undefined) {
        this.router.navigate(['/']);
      }
      else {
        res = await this.validPassword(result);
        if (res === true) {
          console.log(res);
          this.images = await this.imageService.getAllPrivateImages();
        }
      }
    });
  }
  async validPassword(password: string) {
    const userData = await this.userService.getUserSettings();
    const accesableData = JSON.parse(JSON.stringify(userData));
    if (password !== accesableData.password) {
      return this.isValidAccess();
    }
    else return true;
  }
  /////////////


  async getLibraryData() {
    const data = await this.userService.getUserSettings();
    if (data) {
      const accesableData = JSON.parse(JSON.stringify(data));
      this.libraryName = accesableData.libraryName;
      this.defaultView = accesableData.selectedView;
      //If its list, then its true
      //1 is grid 2 is list
      this.view = this.defaultView === 1 ? true : false;
    }
    else {
      console.log('error');
    }
  }


  async getImages() {
    try {
      switch (this.imagesType) {
        case 0:
          this.images = await this.imageService.getAllPublicImages();
          this.title = "Home"
          break;
        case 1:
          this.isValidAccess();
          this.title = "Private album"
          break;
        default:
          this.images = await this.imageService.getAllPublicFavoriteImages();
          this.title = "Favorites"
          break;
      }
      this.allImages = this.images;
      this.isLoading = false;
    }
    catch (e) {
      this.error = e;
    }
  }

  searchByCategory(categories: any) {
    let filteredImages = [];
    let foundCategory = false;
    let counter = 0;
    for (let i = 0; i < this.images.length; i++) {
      this.images[i].category.sort();
      categories.sort();
      for (let j = 0; j < this.images[i].category.length; j++) {
        for (let k = 0; k < categories.length; k++) {
          if (categories[k] === String(this.images[i].category[j]))
            counter++;
        }
      }
      if (counter === categories.length)
        filteredImages.push(this.images[i]);
      foundCategory = false;
      counter = 0;
    }
    this.images = categories.length !== 0 ? filteredImages : this.allImages;
  }
  searchByName(event: any) {
    this.imageName = event.target.value;
    const filterImages = this.images.filter(image => image.title.toLowerCase().startsWith(this.imageName));
    this.images = this.imageName !== '' ? filterImages : this.allImages;
  }

  slideShow() {
    this.shuffledImages = this.images.sort(() => Math.random() - 0.5);
    this.startSlideShow = !this.startSlideShow;
  }
  onViewChange() {
    this.view = !this.view;
    console.log(this.view);

    console.log('view change');
  }
}
