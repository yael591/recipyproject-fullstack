import { TestBed } from '@angular/core/testing';

import { RecipyService } from './recipy.service';

describe('RecipyService', () => {
  let service: RecipyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
