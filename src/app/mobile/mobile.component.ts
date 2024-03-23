import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent implements OnInit {
  public FromLogin: any = {};
  hide = true;

  constructor() {}

  ngOnInit(): void {}

  Login() {
    console.log('login');
    console.log('login data', this.FromLogin);
  }
}
