import { Component, OnInit, HostListener } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {LocalStorage} from '../../helper/localStorage'
import {LoginService} from '../../services/login.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public localStorage: LocalStorage,
    public loginService: LoginService,
    private toastrService: ToastrService,
    public router: Router) {

    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  login() {
      this.loginService.login(this.username, this.password).subscribe(user => {
        this.localStorage.persist('sellerId', user['sellerId'])
        this.localStorage.persist('name', user['name'])
        this.localStorage.persist('username', user['username'])
        this.localStorage.persist('token', user['token'])
        this.toastrService.success("Bem vindo!")
        this.router.navigate(['/dashboard'])
      },error =>{
        this.toastrService.error('Ops! Não foi possível realizar seu login.')
      })
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    const {key} = event
    if(key === 'Enter') this.login();
  }

}
