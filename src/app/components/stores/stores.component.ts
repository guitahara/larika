import { Component, OnInit } from '@angular/core';
import { Store } from '../../models/stores.model';
import { StoresService } from '../../services/store.service'

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {
  stores: Array<Store>;
  loading: Boolean = false;
  constructor(private storesService: StoresService) { }

  ngOnInit() {
    this.loading = true;
    this.storesService.getStores().subscribe(stores => {
      this.stores = stores;
      this.loading = false;
    });
  }

}
