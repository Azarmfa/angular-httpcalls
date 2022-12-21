import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  constructor(private http: HttpClient) {
    this.http
      .get('https://dummyjson.com/products/1')
      .subscribe((res) => console.log(res));
  }
}
