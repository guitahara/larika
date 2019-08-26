import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from 'app/models/stores.model';
import { StoresService } from 'app/services/store.service';

@Component({
  selector: 'app-stores-create',
  templateUrl: './stores-create.component.html',
  styleUrls: ['./stores-create.component.scss']
})
export class StoresCreateComponent implements OnInit {

  store: Store = new Store();

  constructor(private storesService: StoresService, private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.storesService.post(this.store).subscribe();
    this.router.navigate(['/stores'])
  }

}
