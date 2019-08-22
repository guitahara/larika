import {Injectable} from '@angular/core'
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable()
export class AuthService {
  constructor() {}
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const helper = new JwtHelperService()
    return !helper.isTokenExpired(token);
  }
}