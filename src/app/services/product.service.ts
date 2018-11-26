import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from '../models/products.model';

@Injectable()
export class ProductsService {

    endPoint = 'https://larica-api.herokuapp.com/product';

    constructor(private httpClient: HttpClient) {}
    
    getProducts() {
        return this.httpClient.get<Array<Product>>(this.endPoint);
    }

    getProductsById(id: string) {
        return this.httpClient.get<Product>(`${this.endPoint}/${id}`);
    }

    post(product: Product) {
        return this.httpClient.post<Product>(this.endPoint, product);
    }

    put(product: Product, id: string) {
        return this.httpClient.put<Product>(`${this.endPoint}/${id}`, product);
    }
    
}
