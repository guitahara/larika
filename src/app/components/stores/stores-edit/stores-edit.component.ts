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
  constructor(private storesService: StoresService,
    private route: ActivatedRoute,
    private router: Router,
    private listService: ListService
    ) { }

  ngOnInit() {
    this.populateStore();
  }

  populateStore() {
    this.storesService.getStoresById(this.id).subscribe(store => {
      this.store = store;
    });
    this.listService.getList(this.id).subscribe(list => {
      this.productsList = list
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
    // alert(product)
    this.listService.postListProduct(this.id, product).subscribe()
    this.populateStore()
  }

}
