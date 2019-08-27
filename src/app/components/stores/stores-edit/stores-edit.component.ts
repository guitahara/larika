import { Component, OnInit } from '@angular/core';
import { Store } from 'app/models/stores.model';
import { StoresService } from 'app/services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreProduct } from 'app/models/storeProduct.model';
import { ListService } from 'app/services/list.service';

@Component({
  selector: 'app-stores-edit',
  templateUrl: './stores-edit.component.html',
  styleUrls: ['./stores-edit.component.scss']
})
export class StoresEditComponent implements OnInit {
  id: string = this.route.snapshot.params['id'];
  store: Store = new Store();
  productsList: Array<StoreProduct> = [];
  activeTab: Number = 1;
  loading: Boolean = false;
  constructor(private storesService: StoresService,
    private route: ActivatedRoute,
    private router: Router,
    private listService: ListService
    ) { }

  ngOnInit() {
    this.populateStore();
  }

  populateStore() {
    this.loading = true;
    this.storesService.getStoresById(this.id).subscribe(store => {
      this.store = store;
      this.listService.getList(this.id).subscribe(list => {
        this.productsList = list
        this.loading = false
      });
    });
    
  }

  edit() {
    this.storesService.put(this.store, this.id).subscribe();
    this.router.navigate(['/stores']);
  }

  setActiveTab(tab:Number) {
    this.activeTab = tab;
  }

  addProduct(product: StoreProduct) {
    this.listService.postListProduct(this.id, product).subscribe()
    this.populateStore()
  }

  editProduct(product: StoreProduct) {
    this.listService.putListProduct(this.id, product, product.id.valueOf()).subscribe()
    this.populateStore()
  }

  removeProduct(productId: string) {
    this.listService.deleteListProduct(this.id, productId).subscribe()
    this.populateStore()
  } 

}
