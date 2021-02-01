import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeImageCardComponent } from './large-image-card.component';

describe('LargeImageCardComponent', () => {
  let component: LargeImageCardComponent;
  let fixture: ComponentFixture<LargeImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeImageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
