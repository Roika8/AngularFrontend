import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Image } from 'src/app/Model/Image';
import { ImageService } from 'src/app/Services/images/image.service';
import { UserService } from 'src/app/Services/User/user.service';
import { DialogComponent } from 'src/app/Static/dialog/dialog.component';

@Component({
  selector: 'app-private-mode',
  templateUrl: './private-mode.component.html',
  styleUrls: ['./private-mode.component.css']
})
export class PrivateModeComponent {
  // isLoading: boolean;
  // images?: Image[];
  // error?: string;
  // gridColumns = 3;

  constructor(private imageService: ImageService, public dialog: MatDialog, private router: Router, private userService: UserService) {
    // this.isValidAccess();
    // this.isLoading = true;
    // this.images = new Array();
  }
  // isValidAccess() {
  //   let res;
  //   let dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     data: { password: '' }
  //   });
  //   dialogRef.afterClosed().subscribe(async (result) => {
  //     console.log(result);
  //     if (result === undefined) {
  //       this.router.navigate(['/']);
  //     }
  //     else {
  //       res = await this.validPassword(result);
  //       if (res === true) {
  //         console.log(res);
  //         this.getImages();
  //       }
  //     }
  //   });
  // }
  // async validPassword(password: string) {
  //   const userData = await this.userService.getUserSettings();
  //   const accesableData = JSON.parse(JSON.stringify(userData));
  //   if (password !== accesableData.password) {
  //     return this.isValidAccess();
  //   }
  //   else return true;
  // }



  // async getImages() {
  //   try {
  //     console.log('here');

  //     this.images = await this.imageService.getAllPrivateImages();
  //     console.log(this.images);
  //     this.isLoading = false;
  //   }
  //   catch (e) {
  //     this.error = e;
  //   }
  // }

}
