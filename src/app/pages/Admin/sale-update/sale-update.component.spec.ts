import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleUpdateComponent } from './sale-update.component';

describe('SaleUpdateComponent', () => {
  let component: SaleUpdateComponent;
  let fixture: ComponentFixture<SaleUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleUpdateComponent]
    });
    fixture = TestBed.createComponent(SaleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
