import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, pipe } from 'rxjs';
interface ireqres_parent {
  data: any[];
  per_page: number;
  total_pages: number;
}

export interface ireqres {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-http-tutorial';
  apiresponse!: any;
  err: any;
  showFiller = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let options: any = new HttpParams().set('page', '1');
    this.http
      .get('https://reqres.in/api/users?delay=5', { params: options })
      .subscribe(
        (res: any) => {
          console.log(res);
          this.apiresponse = res.data;
          console.log(this.apiresponse);
        },
        (err) => {
          this.err = err;
          console.log(err.message);
        }
      );

    // this.http
    //   .post('https://reqres.in/api/register', {
    //     email: 'eve.holt@reqres.in',
    //   })
    //   .subscribe((res: any) => {
    //     console.log(res);
    //     // this.http
    //     //   .get('https://reqres.in/api/users/' + res.id)
    //     //   .subscribe((res: any) => {
    //     //     console.log(res);
    //     //   });
    //   });
  }
}
