import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeaheadComponent } from './product-typeahead.component';

describe('ProductTypeaheadComponent', () => {
  let component: ProductTypeaheadComponent;
  let fixture: ComponentFixture<ProductTypeaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypeaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
