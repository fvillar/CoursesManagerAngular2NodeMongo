import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServicesService } from '../services.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor(
    private router: Router,
    private _servicesService: ServicesService) { }

  ngOnInit() {
  }

  logoutSite(){
    this._servicesService.setToken('');
    let link = ['/'];
    this.router.navigate(link);
  }

}
