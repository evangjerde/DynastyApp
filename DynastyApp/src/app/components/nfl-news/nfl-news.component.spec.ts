import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflNewsComponent } from './nfl-news.component';

describe('NflNewsComponent', () => {
  let component: NflNewsComponent;
  let fixture: ComponentFixture<NflNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NflNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
