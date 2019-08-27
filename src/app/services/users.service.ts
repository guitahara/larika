import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import { environment } from '../../environments/environment';
import {LocalStorage} from '../helper/localStorage';


@Injectable()
export class UsersService {
    endPoint = `${environment.baseUrl}users`;

    constructor(
        private httpClient: HttpClient,
        private localStorage: LocalStorage
    ) {}

    getUsers() {
        const headers = this.setHeaders()
        return this.httpClient.get<Array<User>>(this.endPoint, {headers});
    }

    getUserById(id: string) {
        const headers = this.setHeaders()
        return this.httpClient.get<User>(`${this.endPoint}/${id}`, {headers});
    }

    post(user: User) {
        const headers = this.setHeaders()
        return this.httpClient.post<User>(this.endPoint, user, {headers});
    }

    put(user: User, id: string) {
        const headers = this.setHeaders()
        return this.httpClient.put<User>(`${this.endPoint}/${id}`, user, {headers});
    }

    getSellerId() {
        return this.localStorage.retrieve('sellerId');
    }

    private setHeaders () {
        const token = new LocalStorage().retrieve('token')
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('authorization', 'Bearer ' + token)
        return headers
    }
    
}
