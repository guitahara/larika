import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class LoginService {

    endPoint = `${environment.baseUrl}login`;

    constructor(private httpClient: HttpClient) {}
    
    login(username:string, password:string) {
        return this.httpClient.post<Object>(this.endPoint, {username, password});
    }
    
}
