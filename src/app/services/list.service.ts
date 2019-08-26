import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {StoreProduct} from '../models/storeProduct.model';
import { environment } from '../../environments/environment';
import { LocalStorage } from '../helper/localStorage'

@Injectable()
export class ListService {

    endPoint = `${environment.baseUrl}stores`;

    constructor(private httpClient: HttpClient) {}
    
    getList(storeId:String) {
        const headers = this.setHeaders()
        return this.httpClient.get<Array<StoreProduct>>(`${this.endPoint}/${storeId}/lists`, {headers});
    }

    getListProductsById(storeId:String, productId: String) {
        const headers = this.setHeaders()
        return this.httpClient.get<StoreProduct>(`${this.endPoint}/${storeId}/lists/${productId}`,{headers});
    }

    postListProduct(storeId:String, product: StoreProduct) {
        const headers = this.setHeaders()
        return this.httpClient.post<StoreProduct>(`${this.endPoint}/${storeId}/lists`, product, {headers});
    }

    putListProduct(storeId:String, product: StoreProduct, productId: string) {
        const headers = this.setHeaders()
        return this.httpClient.put<StoreProduct>(`${this.endPoint}/${storeId}/lists/${productId}`, product, {headers});
    }

    deleteListProduct(storeId:String, productId: string) {
      const headers = this.setHeaders()
      return this.httpClient.delete<StoreProduct>(`${this.endPoint}/${storeId}/lists/${productId}`, {headers});
    }

    private setHeaders () {
        const token = new LocalStorage().retrieve('token')
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
                               .set('authorization', 'Bearer ' + token)
        return headers
    }
    
}
