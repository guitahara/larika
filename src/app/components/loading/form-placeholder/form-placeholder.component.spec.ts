import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlaceholderComponent } from './form-placeholder.component';

describe('FormPlaceholderComponent', () => {
  let component: FormPlaceholderComponent;
  let fixture: ComponentFixture<FormPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
