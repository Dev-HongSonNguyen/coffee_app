import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAddComponent } from './slider-add.component';

describe('SliderAddComponent', () => {
  let component: SliderAddComponent;
  let fixture: ComponentFixture<SliderAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderAddComponent]
    });
    fixture = TestBed.createComponent(SliderAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
