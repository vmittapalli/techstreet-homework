import { Component, OnInit } from '@angular/core';
import { AngularService } from '../angular/service';
import { FormBuilder, FormGroup } from '@angular/forms';
import{LoginService} from './login.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  loggedIn:  string = null;

  constructor(
    private _service: AngularService,
    private _builder: FormBuilder,
    private _LoginService:LoginService
  ) {
    this.loginForm = this._builder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('currentUser');
    this._service.setDirective(1);
  }
  save(username,password) {
   this._service.setDirective(2);
   this._LoginService.login(username,password);
  }
}
