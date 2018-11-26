import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/products.model';
import { ProductsService } from 'app/services/product.service';

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

}
