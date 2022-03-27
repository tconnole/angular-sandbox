import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingAnimationsComponent } from './loading-animations.component';

describe('LoadingAnimationsComponent', () => {
  let component: LoadingAnimationsComponent;
  let fixture: ComponentFixture<LoadingAnimationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingAnimationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
