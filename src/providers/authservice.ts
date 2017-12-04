import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Configuration } from './serverconfig';
import { User } from './domainobjects';
import 'rxjs/add/operator/map';

import { LoginUserDTO } from './domainobjects';

@Injectable()
export class AuthService {

  constructor(public http: Http, private serverConfig:Configuration) {
  }

  login(credentials:LoginUserDTO) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(this.serverConfig.GetUserUrl, JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  register(data) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post(this.serverConfig+'guest/signup', JSON.stringify(data), {headers: headers})
          .subscribe(res => {
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
    });
  }

  logout(){
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('X-Auth-Token', localStorage.getItem('token'));

        this.http.post(this.serverConfig+'logout', {}, {headers: headers})
          .subscribe(res => {
            localStorage.clear();
          }, (err) => {
            reject(err);
          });
    });
  }

}