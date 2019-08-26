import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'app/models/products.model';
import { ProductsService } from 'app/services/product.service';
import { ListService } from 'app/services/list.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'app/services/users.service';


@Component({
  selector: 'app-product-typeahead',
  templateUrl: './product-typeahead.component.html',
  styleUrls: ['./product-typeahead.component.scss']
})
export class ProductTypeaheadComponent implements OnInit {
  @Output() response = new EventEmitter()
  products: Array<Product> = [];
  productTitle: string;
  store:string = this.route.snapshot.params['id'];
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit() {
  }

  findProduct() {
    if(this.productTitle.length)
      this.productsService.getProducts({title:this.productTitle, limit:10}).subscribe(products => this.products = products)
    else
      this.products = []
  }

  addProduct (product: Product) {
    const response = {
      product: product.id,
      useDefaultPrice: false,
      price: 1,
      availableQuantity: 1,
      store: this.store,
      seller: this.userService.getSellerId()
    }
    this.response.emit(response)
    this.products = []
  }

}
