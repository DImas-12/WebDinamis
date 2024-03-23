import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css'],
})
export class WebComponent implements OnInit {
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
