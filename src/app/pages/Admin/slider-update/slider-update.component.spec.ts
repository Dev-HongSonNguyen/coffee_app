import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderUpdateComponent } from './slider-update.component';

describe('SliderUpdateComponent', () => {
  let component: SliderUpdateComponent;
  let fixture: ComponentFixture<SliderUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderUpdateComponent]
    });
    fixture = TestBed.createComponent(SliderUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
