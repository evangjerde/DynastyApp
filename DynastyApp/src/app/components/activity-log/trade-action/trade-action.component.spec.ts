import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeActionComponent } from './trade-action.component';

describe('TradeActionComponent', () => {
  let component: TradeActionComponent;
  let fixture: ComponentFixture<TradeActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradeActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
