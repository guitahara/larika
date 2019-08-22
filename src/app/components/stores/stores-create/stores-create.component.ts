import { Component, OnInit } from '@angular/core';
import { Store } from 'app/models/stores.model';
import { StoresService } from 'app/services/store.service';

@Component({
  selector: 'app-stores-create',
  templateUrl: './stores-create.component.html',
  styleUrls: ['./stores-create.component.scss']
})
export class StoresCreateComponent implements OnInit {

  store: Store = new Store();

  constructor(private storesService: StoresService) { }

  ngOnInit() {
  }

  create() {
    this.storesService.post(this.store).subscribe();
  }

}
