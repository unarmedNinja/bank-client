import { TestBed } from '@angular/core/testing';

import { CibcService } from './cibc.service';

describe('CibcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CibcService = TestBed.get(CibcService);
    expect(service).toBeTruthy();
  });
});
