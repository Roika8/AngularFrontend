import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  async userFirstTime() {
    try {
      const condition = await this.http.get<boolean>(`${this.url}/user/firstTime`).toPromise();
      return condition
    }
    catch (e) {
      console.log(e);
      //redirect to not found
      return undefined;
    }
  }
  setUserSettings = (props: any) => {
    try {
      this.http.post(`${this.url}/user/set`, props).subscribe(res => {
        console.log(res);
      })
    }
    catch (e) {
      console.log(e);
    }

  }
  async getUserSettings() {
    try {
      const settings = await this.http.get(`${this.url}/user`).toPromise();
      return settings;
    }
    catch (e) {
      console.log(e);
      return undefined;
    }
  }
}

