import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  libraryName?: string;
  description?: string;
  defultView: boolean = false;
  constructor(private userService: UserService) {
    this.getLibraryData()
  }

  ngOnInit(): void {
  }
  async getLibraryData() {
    const settings = JSON.parse(JSON.stringify(await this.userService.getUserSettings()));
    if (settings) {
      this.libraryName = settings.libraryName;
      this.defultView = settings.viewSelect === '2' ? true : false;
      this.description = settings.description;
      console.log( this.defultView);

    }


  }
}
