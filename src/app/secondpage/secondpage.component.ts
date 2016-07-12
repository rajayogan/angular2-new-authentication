import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-secondpage',
  templateUrl: 'secondpage.component.html',
  styleUrls: ['secondpage.component.css']
})
export class SecondpageComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

logout(){
  window.localStorage.removeItem('auth_key');
  this.router.navigate(['/first']);
}

}
