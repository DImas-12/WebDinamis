import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css'],
})
export class WebComponent implements OnInit {
  public FromLogin: any = {};
  hide = true;

  constructor() {}

  ngOnInit(): void {}

  Login() {
    console.log('login');
    console.log('login data', this.FromLogin);
  }
}
