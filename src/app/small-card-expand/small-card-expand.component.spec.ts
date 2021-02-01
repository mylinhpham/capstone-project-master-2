import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCardExpandComponent } from './small-card-expand.component';

describe('SmallCardExpandComponent', () => {
  let component: SmallCardExpandComponent;
  let fixture: ComponentFixture<SmallCardExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCardExpandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCardExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
