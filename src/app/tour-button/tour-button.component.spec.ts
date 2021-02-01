import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourButtonComponent } from './tour-button.component';

describe('TourButtonComponent', () => {
  let component: TourButtonComponent;
  let fixture: ComponentFixture<TourButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
