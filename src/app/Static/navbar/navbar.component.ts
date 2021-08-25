import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ImageService } from 'src/app/Services/images/image.service';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  librayName?: string;
  theme: boolean = false;



  constructor(private observer: BreakpointObserver, private userService: UserService) {
    this.getLibraryName();
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    }
    )
  }
  async getLibraryName() {
    const settings = JSON.parse(JSON.stringify(await this.userService.getUserSettings()));
    if (settings)
      this.librayName = settings.libraryName;
    console.log(settings);

  }
  onThemeChange() {
  }

}
