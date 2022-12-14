import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestapiService {
  constructor(private http: HttpClient) {}

  getReqRes(pageNumber: number) {
    let options = new HttpParams().set('page', pageNumber);
    let httpOptions = new HttpHeaders();
    httpOptions = httpOptions.set('Custom-header1', 'x-header1');
    httpOptions = httpOptions.set('Custom-header2', 'x-header2');
    // let page = 2;
    return this.http.get('https://reqres.in/api/users', {
      headers: httpOptions,
      params: options,
    });
  }

  postReqRes() {
    let options = new HttpParams().set('new', true);
    return this.http.post(
      'https://reqres.in/api/users',
      {
        name: 'Surya',
        job: 'leader',
      },
      { params: options }
    );
  }
}
