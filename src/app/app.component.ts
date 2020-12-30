import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'commerce1';
  urlTree: UrlTree;
  access_token = '';
  url= '';
  
  
  constructor(private router: Router, private route: ActivatedRoute){
   console.log('url actual: ' + window.location.href)
   this.url = window.location.href;
   // var a = this.url.split('/#')
    //a.filter



   this.route.url
   this.route.queryParams.subscribe(params => {
    this.access_token = params['access_token'];
    console.log('access_token: ' + this.access_token)
    console.log(router)
    console.log(route)
  });
  }

  /*constructor(public router: Router) {
    this.access_token = localStorage.getItem("access_token");
    console.log('token: ' + this.access_token)
   // this._accessToken = localStorage.getItem("Auth0AccessToken");
    //this._expiresAt = parseInt(localStorage.getItem("Auth0ExpiresAt"));
  }*/
 
  
  ngOnInit(): void {
  /*  this.urlTree = this.router.parseUrl(this.router.url);
    console.log('router: ' + this.router)
    console.log('urlTree: ' + this.urlTree)
   this.access_token = this.urlTree.queryParams['access_token'];
   console.log('access_token: ' + this.access_token)*/
   //console.log('Sneider')
   //console.log(this.route.snapshot)
  }

  
}
