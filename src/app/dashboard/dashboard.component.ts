import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  logout(){
    window.localStorage.removeItem('auth_key');
    this.router.navigate(['/login']);
  }

}
