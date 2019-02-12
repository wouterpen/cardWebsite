import { TestBed } from '@angular/core/testing';

import { GetqueriesService } from './getqueries.service';

describe('GetqueriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetqueriesService = TestBed.get(GetqueriesService);
    expect(service).toBeTruthy();
  });
});
