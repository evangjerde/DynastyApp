import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflPageComponent } from './nfl-page.component';

describe('NflPageComponent', () => {
  let component: NflPageComponent;
  let fixture: ComponentFixture<NflPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NflPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
