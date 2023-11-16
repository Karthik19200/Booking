import { TestBed } from '@angular/core/testing';

import { JobBookingService } from './job-booking.service';

describe('JobBookingService', () => {
  let service: JobBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
