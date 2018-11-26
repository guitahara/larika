import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../services/product.service';
import { Product } from '../../models/products.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  id: string =  this.route.snapshot.params['id'];
  product: Product = new Product();
  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.productsService.getProductsById(this.id).subscribe(product => {
      this.product = product;
    });
  }

  edit() {
    console.log(this.product);
    this.productsService.put(this.product, this.id).subscribe();
  }

}
