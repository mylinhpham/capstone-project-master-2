import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallImageCardComponent } from './small-image-card.component';

describe('SmallImageCardComponent', () => {
  let component: SmallImageCardComponent;
  let fixture: ComponentFixture<SmallImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallImageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
