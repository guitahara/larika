import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/products.model';
import { ProductsService } from 'app/services/product.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductsService) { }

  ngOnInit() {
  }

  Create() {
    this.productService.post(this.product).subscribe();
  }

  clickFileInput() {
    document.getElementById('image').click();
  }

  async changePicture() {
    this.product.image = (document.getElementById('image') as HTMLInputElement).files[0];
    this.product.imageUrl = await this.getBase64(this.product.image)
  }

  private getBase64(file: File): Promise<any> { 
    return new Promise((resolve, reject) => { 
      const reader = new FileReader(); 
      reader.readAsDataURL(file); 
      reader.onload = () => { 
        resolve(reader.result) 
      }      
      reader.onerror = err => { reject(err) } 
    }) 
  }

}
