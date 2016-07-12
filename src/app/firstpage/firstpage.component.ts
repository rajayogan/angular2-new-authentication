import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-firstpage',
  templateUrl: 'firstpage.component.html',
  styleUrls: ['firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
   localUser = {
     username: '',
     password: ''
   }
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
  }
  
  login() {
    let checknow = this.auth.authenticatenow(this.localUser);
    checknow.then((res) => {
      if(res) {
        this.router.navigate(['/second']);
      }
      else {
        console.log('Invalid user');
      }
    })    
  }

}
