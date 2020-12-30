import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {
  token = '';
  constructor(private http: HttpClient) {
    this.token = sessionStorage.getItem('token');
  }
  getUsers() {
    return this.http.get(`${environment.urlApi}/users`, {
      headers: {
        authorization: `${this.token}`
      }
    });
  }
  getDetailUser() {
    return this.http.get(`${environment.urlApi}/users/detail`, {
      headers: {
        authorization: `${this.token}`
      }
    });
  }

  getPosts() {
    return this.http.get(`${environment.urlApi}/posts`, {
      headers: {
        authorization: `${this.token}`
      }
    });
  }

  getComments() {
    return this.http.get(`${environment.urlApi}/comments`, {
      headers: {
        authorization: `${this.token}`
      }
    });
  }

  getCategories() {
    return this.http.get(`${environment.urlApi}/categories`, {
      headers: {
        authorization: `${this.token}`
      }
    });
  }

  getCities() {
    return this.http.get(`${environment.urlApi}/cities`)
  }

  getUserInfo() {
    return this.http.get(`${environment.urlApi}/users`, {
      headers: {
        authorization: `${this.token}`
      }
    })
  }

}
