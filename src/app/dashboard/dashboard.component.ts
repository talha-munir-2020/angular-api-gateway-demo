import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ApiGatewayService } from '../service/api-gateway.service';
import { AwsCognitoService } from '../service/aws-cognito.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tokenDetails: any;
  token: any;
  result = '';

  constructor(private awsCognitoService: AwsCognitoService, private apiGatewayService: ApiGatewayService, private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log('Token: ', localStorage.getItem('token'));

    this.token = localStorage.getItem('token');

    if (this.token) {
      const base64Url = this.token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      this.tokenDetails = JSON.parse(atob(base64));

      console.log(this.tokenDetails);
    }
  }

  logout(): void {
    window.location.assign(environment.logout);
  }

  getUserInfo() {
    this.apiGatewayService.getUserInfo().subscribe(
      res => {
        this.showSuccess();
        this.result = JSON.stringify(res);
      },
      err => {
        this.showError(err);
        console.log(err);

      }
    )
  }

  getCities() {
    this.apiGatewayService.getCities().subscribe(
      res => {
        this.showSuccess();
        this.result = JSON.stringify(res);
      },
      err => {
        this.showError(err);
        console.log(err);

      }
    )
  }

  getDetailUser(){
    this.apiGatewayService.getDetailUser().subscribe(
      res => {
        this.showSuccess();
        this.result = JSON.stringify(res);
      },
      err => {
        this.showError(err);
        console.log(err);
      }
    )
  }

  getPosts(){
    this.apiGatewayService.getPosts().subscribe(
      res => {
        this.showSuccess();
        this.result = JSON.stringify(res);
      },
      err => {
        this.showError(err);
        console.log(err);
      }
    )
  }

  getComments(){
    this.apiGatewayService.getComments().subscribe(
      res => {
        this.showSuccess();
        this.result = JSON.stringify(res);
      },
      err => {
        this.showError(err);
        console.log(err);
      }
    )
  }

  getCategories(){
    this.apiGatewayService.getCategories().subscribe(
      res => {
        this.showSuccess();
        this.result = JSON.stringify(res);
      },
      err => {
        this.showError(err);
        console.log(err);
      }
    )
  }

  showSuccess() {
    this.toastr.success('', 'Consulta exitosa');
  }

  showError(error: any) {
    this.toastr.error( JSON.stringify(error), 'Error al obtener consulta');
  }

}
