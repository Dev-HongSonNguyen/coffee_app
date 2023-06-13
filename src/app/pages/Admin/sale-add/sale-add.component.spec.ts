import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleAddComponent } from './sale-add.component';

describe('SaleAddComponent', () => {
  let component: SaleAddComponent;
  let fixture: ComponentFixture<SaleAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleAddComponent]
    });
    fixture = TestBed.createComponent(SaleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
