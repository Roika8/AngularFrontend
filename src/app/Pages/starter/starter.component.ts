import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.css']
})
export class StarterComponent implements OnInit {
  access: FormGroup;
  password?: string;
  viewValue = '1'
  constructor(private userService: UserService, fb: FormBuilder, private router: Router) {
    this.access = fb.group({
      deviceLocation: false,
      deviceCamera: false,
      privateMode: false
    });
  }

  ngOnInit(): void {
  }
  Submit(f: any) {
    try {
          const userSettings = {
        devicCamera: this.access.value.deviceCamera,
        deviceLocation: this.access.value.deviceLocation,
        privateMode: this.access.value.privateMode,
        password: this.password,
        description: f.form.value.description,
        libraryName: f.form.value.name,
        viewSelect: f.form.value.viewSelect
      }
      this.userService.setUserSettings(userSettings);
      this.router.navigate(['/']);
    }
    catch (e) {
      console.log(e);
      this.router.navigate(['/started']);

    }

  }
}
