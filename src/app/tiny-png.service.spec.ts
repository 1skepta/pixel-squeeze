import { TestBed } from '@angular/core/testing';

import { TinyPngService } from './tiny-png.service';

describe('TinyPngService', () => {
  let service: TinyPngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TinyPngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
