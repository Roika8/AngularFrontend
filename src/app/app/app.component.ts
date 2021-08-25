import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../Services/User/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {

  }
  ngOnInit(): void {
    this.redirectByUserState();
  }
  async redirectByUserState() {
    //If state it true (means it is furst time in the app ,nav to starter, else to main)
    const state = await this.userService.userFirstTime();
    this.router.navigate(state ? ['/starter'] : ['/']);
  }
}

