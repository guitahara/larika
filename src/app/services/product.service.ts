import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Product} from '../models/products.model';
import { environment } from '../../environments/environment';

@Injectable()
export class ProductsService {

    endPoint = `${environment.baseUrl}product`;

    constructor(private httpClient: HttpClient) {}
    
    getProducts() {
        return this.httpClient.get<Array<Product>>(this.endPoint);
    }

    getProductsById(id: string) {
        return this.httpClient.get<Product>(`${this.endPoint}/${id}`);
    }

    post(product: Product) {
        const form_data = new FormData();
        
        // tslint:disable-next-line:forin
        for (const key in product) {
            form_data.append(key, product[key]);
        };

        return this.httpClient.post<Product>(this.endPoint, form_data);
    }

    put(product: Product, id: string) {
        const form_data = new FormData();
        
        // tslint:disable-next-line:forin
        for (const key in product) {
            form_data.append(key, product[key]);
        };

        return this.httpClient.put<Product>(`${this.endPoint}/${id}`, form_data);
    }
    
}
