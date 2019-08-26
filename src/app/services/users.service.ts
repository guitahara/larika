import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import { environment } from '../../environments/environment';
import {LocalStorage} from '../helper/localStorage';


@Injectable()
export class UsersService {
    endPoint = `${environment.baseUrl}user`;

    constructor(
        private httpClient: HttpClient,
        private localStorage: LocalStorage
    ) {}

    getUsers() {
        return this.httpClient.get<Array<User>>(this.endPoint);
    }

    getUserById(id: string) {
        return this.httpClient.get<User>(`${this.endPoint}/${id}`);
    }

    post(user: User) {
        return this.httpClient.post<User>(this.endPoint, user);
    }

    put(user: User, id: string) {
        return this.httpClient.put<User>(`${this.endPoint}/${id}`, user);
    }

    getSellerId() {
        return this.localStorage.retrieve('sellerId');
    }
}
