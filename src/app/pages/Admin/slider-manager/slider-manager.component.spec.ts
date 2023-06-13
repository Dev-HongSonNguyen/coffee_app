import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderManagerComponent } from './slider-manager.component';

describe('SliderManagerComponent', () => {
  let component: SliderManagerComponent;
  let fixture: ComponentFixture<SliderManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderManagerComponent]
    });
    fixture = TestBed.createComponent(SliderManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
