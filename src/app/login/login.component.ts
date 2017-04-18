import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import _ from 'lodash';

import Login from '../models/login';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showAlert: boolean;
  message: string;
  login: Login;

  constructor(
    private router: Router,
    private _servicesService: ServicesService) { }

  ngOnInit() {
    this.showAlert = false;
    this.message = 'Either the username and/or password is incorrect';
    this.login = new Login('', '');
  }

  doLogin() {
    this._servicesService
      .login(this.login)
      .then((response) => {            
        this.showAlert = false;
        this._servicesService.setUsername(this.login.username);
        this._servicesService.setToken(_.get(response, 'token'));
        let link = ['/courses'];
        this.router.navigate(link);
      })
      .catch(() => {
        this.showAlert = true;
      })
  }

}
