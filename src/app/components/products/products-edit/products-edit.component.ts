import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/product.service';
import { Product } from '../../../models/products.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  id: string = this.route.snapshot.params['id'];
  product: Product = new Product();
  loading: Boolean = false;
  constructor(private productsService: ProductsService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;
    this.productsService.getProductsById(this.id).subscribe(product => {
      this.product = product;
      this.loading = false;
    });
  }

  edit() {
    this.productsService.put(this.product, this.id).subscribe();
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
