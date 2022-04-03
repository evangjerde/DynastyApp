import { TestBed } from '@angular/core/testing';

import { EspnFeedService } from './espn-feed.service';

describe('EspnFeedService', () => {
  let service: EspnFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspnFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
