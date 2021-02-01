import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundInfoCardComponent } from './round-info-card.component';

describe('RoundInfoCardComponent', () => {
  let component: RoundInfoCardComponent;
  let fixture: ComponentFixture<RoundInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
