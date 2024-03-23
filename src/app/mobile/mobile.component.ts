import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent implements OnInit {
  public FromLogin: any = {};
  public Loadding: boolean = false;
  hide = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  NavigateHomePage() {
    this.router.navigate(['home']);
  }

  Login() {
    console.log('login');
    console.log('login data', this.FromLogin);
    this.Loadding = true;

    setTimeout(() => {
      this.Loadding = false;
    }, 2000);
  }
}
