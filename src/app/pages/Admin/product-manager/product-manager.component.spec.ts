import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManagerComponent } from './product-manager.component';

describe('ProductManagerComponent', () => {
  let component: ProductManagerComponent;
  let fixture: ComponentFixture<ProductManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductManagerComponent]
    });
    fixture = TestBed.createComponent(ProductManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
