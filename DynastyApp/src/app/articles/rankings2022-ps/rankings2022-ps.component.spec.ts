import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rankings2022PsComponent } from './rankings2022-ps.component';

describe('Rankings2022PsComponent', () => {
  let component: Rankings2022PsComponent;
  let fixture: ComponentFixture<Rankings2022PsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rankings2022PsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rankings2022PsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
