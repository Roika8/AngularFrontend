import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': '563492ad6f9170000100000150887f3f48f44dadb64cc90f0cc52e24'
  })
}
@Injectable({
  providedIn: 'root'
})

export class PexelPhotoSearchService {

  constructor(private http: HttpClient) { }

  getdata(search: string, perPage: any): Observable<any> {
    const url = "https://api.pexels.com/v1/search?query=" + search + "&per_page=" + perPage;
    console.log(url);
    return this.http.get<any>(url, httpOptions).pipe(catchError(this.handelError))
  }
  handelError(error: any) {
    return throwError(error);
  }


}
