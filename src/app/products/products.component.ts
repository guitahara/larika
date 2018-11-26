import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/product.service';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

}
