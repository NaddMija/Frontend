import { TestBed } from '@angular/core/testing';

import { SPersonaNuevoService } from './s-persona-nuevo.service';

describe('SPersonaNuevoService', () => {
  let service: SPersonaNuevoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPersonaNuevoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
