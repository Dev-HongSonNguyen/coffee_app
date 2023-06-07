import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostManagerComponent } from './post-manager.component';

describe('PostManagerComponent', () => {
  let component: PostManagerComponent;
  let fixture: ComponentFixture<PostManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostManagerComponent]
    });
    fixture = TestBed.createComponent(PostManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
