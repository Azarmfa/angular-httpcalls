import { Component, OnInit } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { RestapiService } from './restapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  apiresp: any;
  errors!: string;
  errorMsg: boolean = false;
  constructor(private restapi: RestapiService) {}
  ngOnInit() {
    this.restapi.getReqRes(2).subscribe(
      (res: any) => {
        console.log(res);
        this.apiresp = res.data;
        this.errorMsg = false;
      },
      (err: any) => {
        console.log('error', err);
        this.errors = err.message;
        this.errorMsg = true;
      }
    );

    this.restapi.postReqRes().subscribe((res: any) => {
      console.log('POST--->', res);
    });
  }
}
