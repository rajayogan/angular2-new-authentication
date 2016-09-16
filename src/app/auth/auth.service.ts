import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {
  
  isAuthenticated: boolean = false;
  
  constructor(private http: Http) {}
  
  authenticateNow(usercreds) {
    var headers = new Headers();
    var creds = 'name=' + usercreds.username + '&password=' + usercreds.password;

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    return new Promise((resolve) => {
        this.http.post('http://localhost:3333/authenticate', creds, {headers: headers}).subscribe((data) => {
            if(data.json().success) {
                window.localStorage.setItem('auth_key', data.json().token);
                this.isAuthenticated = true;}
                resolve(this.isAuthenticated);
            }
        )
    });
  }

}

