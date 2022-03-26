import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonLeadersComponent } from './season-leaders.component';

describe('SeasonLeadersComponent', () => {
  let component: SeasonLeadersComponent;
  let fixture: ComponentFixture<SeasonLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonLeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
