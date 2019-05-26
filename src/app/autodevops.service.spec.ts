import { TestBed, inject } from '@angular/core/testing';

import { AutodevopsService } from './autodevops.service';

describe('AutodevopsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutodevopsService]
    });
  });

  it('should be created', inject([AutodevopsService], (service: AutodevopsService) => {
    expect(service).toBeTruthy();
  }));
});
