import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '../models/stores.model';
import { environment } from '../../environments/environment';
import { LocalStorage } from '../helper/localStorage'

@Injectable()
export class StoresService {

    endPoint = `${environment.baseUrl}stores`;

    constructor(private httpClient: HttpClient) {}
    
    getStores() {
        const headers = this.setHeaders()
        return this.httpClient.get<Array<Store>>(this.endPoint, {headers});
    }

    getStoresById(id: string) {
        const headers = this.setHeaders()
        return this.httpClient.get<Store>(`${this.endPoint}/${id}`,{headers});
    }

    post(product: Store) {
        const headers = this.setHeaders()
        return this.httpClient.post<Store>(this.endPoint, product, {headers});
    }

    put(product: Store, id: string) {
        const headers = this.setHeaders()
        return this.httpClient.put<Store>(`${this.endPoint}/${id}`, product, {headers});
    }

    private setHeaders () {
        const token = new LocalStorage().retrieve('token')
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('authorization', 'Bearer ' + token)
        return headers
    }
    
}
