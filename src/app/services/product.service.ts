import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from '../models/products.model';
import { environment } from '../../environments/environment';
import { LocalStorage } from '../helper/localStorage';
import {stringify} from 'querystring'

@Injectable()
export class ProductsService {

    endPoint = `${environment.baseUrl}products`;

    constructor(private httpClient: HttpClient) {}
    
    getProducts(filter: Object = {}) {
        const headers = this.setHeaders()
        const qs = stringify(filter)
        return this.httpClient.get<Array<Product>>(`${this.endPoint}?${qs}`, {headers});
    }

    getProductsById(id: string) {
        const headers = this.setHeaders()
        return this.httpClient.get<Product>(`${this.endPoint}/${id}`,{headers});
    }

    post(product: Product) {
        const headers = this.setHeaders()
        return this.httpClient.post<Product>(this.endPoint, product, {headers});
    }

    put(product: Product, id: string) {
        const headers = this.setHeaders()
        return this.httpClient.put<Product>(`${this.endPoint}/${id}`, product, {headers});
    }

    private setHeaders () {
        const token = new LocalStorage().retrieve('token')
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('authorization', 'Bearer ' + token)
        return headers
    }
    
}
